"use client"

import { Heart, Sparkles } from "lucide-react"
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { navLinks, personal, socials } from "@/data/portfolio"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-background/50 py-12 sm:py-16 backdrop-blur-md">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#home" className="group flex items-center gap-2.5">
              <div className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-teal-400 font-mono text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-transform group-hover:scale-105">
                <span>RJ</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {personal.fullName}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {personal.degree} · {personal.collegeShort}
                </p>
              </div>
            </a>
            <p className="mt-3 text-xs text-muted-foreground max-w-sm">
              Crafting responsive full-stack applications with React, Node.js, and SQL, and exploring Generative AI engineering.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <ul className="flex items-center gap-2">
              {socialItems.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} profile`}
                    className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-mono text-[11px] text-muted-foreground text-center md:text-right">
              © {year} {personal.shortName} · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

