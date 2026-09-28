"use client"

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Download, FileText, Menu, Sparkles, X, ArrowUpRight, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks, personal, resumeUrl, socials } from "@/data/portfolio"
import { ThemeToggle } from "@/components/theme-toggle"
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/icons"
import { ResumeModal } from "@/components/resume-modal"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl sm:rounded-full border px-3.5 py-2 sm:px-5 sm:py-2.5 transition-all duration-300",
          scrolled
            ? "border-border/80 bg-background/85 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5"
            : "border-border/40 bg-background/60 shadow-lg backdrop-blur-xl",
        )}
      >
        {/* Logo / Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="relative flex size-9 items-center justify-center rounded-xl sm:rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-teal-400 font-mono text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-transform group-hover:scale-105">
            <span>RJ</span>
            <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background bg-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {personal.shortName}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">B.Tech CSE &apos;28</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-border/40 bg-muted/40 p-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/40",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Resume View & Download Modal */}
          <ResumeModal
            trigger={
              <button
                type="button"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Resume</span>
              </button>
            }
          />

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-95 hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Sparkles className="size-3.5" />
            <span>Hire Me</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Trigger
              className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md transition-opacity duration-200 lg:hidden" />
              <DialogPrimitive.Popup className="fixed inset-y-0 right-0 z-50 flex w-[min(21rem,88vw)] flex-col border-l border-border bg-card p-6 shadow-2xl outline-none transition-transform duration-300 ease-out lg:hidden">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="size-8 rounded-xl bg-gradient-to-tr from-amber-500 to-teal-400 text-white grid place-items-center font-mono text-xs font-bold">
                      RJ
                    </span>
                    <div>
                      <DialogPrimitive.Title className="text-sm font-bold text-foreground">
                        {personal.shortName}
                      </DialogPrimitive.Title>
                      <p className="font-mono text-[10px] text-muted-foreground">B.Tech CSE &apos;28</p>
                    </div>
                  </div>
                  <DialogPrimitive.Close
                    className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Close menu"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </DialogPrimitive.Close>
                </div>

                <nav aria-label="Mobile" className="mt-5 flex-1 overflow-y-auto">
                  <ul className="flex flex-col gap-1.5">
                    {navLinks.map((link) => {
                      const isCurrent = active === link.href.slice(1)
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              isCurrent
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            <span>{link.label}</span>
                            {isCurrent && <span className="size-1.5 rounded-full bg-primary" />}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-5 border-t border-border">
                  {/* Social Links Row in Mobile Drawer */}
                  <div className="flex items-center justify-around py-1">
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/40"
                    >
                      <GitHubIcon className="size-4" />
                    </a>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/40"
                    >
                      <LinkedInIcon className="size-4" />
                    </a>
                    <a
                      href={socials.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/40"
                    >
                      <LeetCodeIcon className="size-4" />
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-95"
                  >
                    <Sparkles className="size-3.5" />
                    <span>Get in Touch</span>
                  </a>

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <FileText className="size-3.5 text-primary" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </DialogPrimitive.Popup>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </div>
    </header>
  )
}

