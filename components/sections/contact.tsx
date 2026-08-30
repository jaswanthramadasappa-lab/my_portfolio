"use client"

import { Check, Copy, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { personal, socials } from "@/data/portfolio"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon },
]

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {copied ? (
        <Check className="size-4 text-primary" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span className="sr-only" role="status">
        {copied ? `${label} copied` : ""}
      </span>
    </button>
  )
}

export function Contact() {
  const contactRows = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, Icon: Mail, copy: true },
    { label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}`, Icon: Phone, copy: true },
    { label: "Location", value: personal.location, href: null, Icon: MapPin, copy: false },
  ]

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something together"
                description="I'm actively looking for internship and placement opportunities. Whether you have a role, a project, or just want to connect — my inbox is open."
              />
              <div className="mt-8 flex items-center gap-2">
                <ul className="flex items-center gap-2">
                  {socialItems.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} profile`}
                        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Icon className="size-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Reveal delay={100} className="flex flex-col justify-center gap-3">
              {contactRows.map(({ label, value, href, Icon, copy }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="block truncate font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="truncate font-medium">{value}</p>
                    )}
                  </div>
                  {copy && <CopyButton value={value} label={label} />}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
