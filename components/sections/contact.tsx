"use client"

import { Check, Copy, Mail, MapPin, Phone, Send, Sparkles, User, MessageSquare } from "lucide-react"
import { useState } from "react"
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { personal, socials } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon, handle: "jaswanthramadasappa-lab" },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon, handle: "jaswanth-ramadasappagari" },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon, handle: "y428pyL8mA" },
]

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard fallback */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {copied ? (
        <Check className="size-4 text-emerald-500" aria-hidden="true" />
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
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formSubject, setFormSubject] = useState("Internship Opportunity")
  const [formMessage, setFormMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formMessage.trim()) return

    const subjectText = encodeURIComponent(`[Portfolio Contact] ${formSubject} from ${formName || "Visitor"}`)
    const bodyText = encodeURIComponent(
      `Name: ${formName || "Not provided"}\nEmail: ${formEmail || "Not provided"}\nTopic: ${formSubject}\n\nMessage:\n${formMessage}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subjectText}&body=${bodyText}`
    setSent(true)
  }

  const contactRows = [
    { label: "Email Address", value: personal.email, href: `mailto:${personal.email}`, Icon: Mail, copy: true },
    { label: "Phone Number", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}`, Icon: Phone, copy: true },
    { label: "Current Base", value: personal.location, href: null, Icon: MapPin, copy: false },
  ]

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-xl shadow-2xl">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Channel Information */}
            <div className="flex flex-col justify-between">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's Build Something Great Together"
                  description="I am actively seeking internship and entry-level placement opportunities. Whether you have a project idea, a position to discuss, or want to connect — I'd love to hear from you."
                />

                {/* Direct Channel Cards */}
                <div className="mt-8 space-y-3">
                  {contactRows.map(({ label, value, href, Icon, copy }) => (
                    <div
                      key={label}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/90"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="block truncate text-sm sm:text-base font-bold text-foreground transition-colors hover:text-primary"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="truncate text-sm sm:text-base font-bold text-foreground">{value}</p>
                          )}
                        </div>
                      </div>
                      {copy && <CopyButton value={value} label={label} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Connect on Platforms
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {socialItems.map(({ label, href, Icon, handle }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-3.5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-background hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="size-4" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Email Message Composer */}
            <Reveal delay={100} className="flex flex-col justify-center">
              <div className="rounded-3xl border border-border/80 bg-background/60 p-6 sm:p-8 backdrop-blur-md shadow-inner">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                  <MessageSquare className="size-4 text-primary" />
                  <span>Send a Direct Message</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe or Recruiter Name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-foreground mb-1.5">
                      Subject Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="Internship Opportunity">Internship Opportunity (Summer 2026/2027)</option>
                      <option value="Job Placement / Full-Time">Full-time Engineering Role</option>
                      <option value="Project Collaboration">Freelance / Project Collaboration</option>
                      <option value="General Technical Inquiry">Saying Hello / Tech Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Write your note, job description, or question here..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="shimmer-btn group w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-95 hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Send className="size-4 transition-transform group-hover:translate-x-1" />
                    <span>Send Message via Email</span>
                  </button>

                  {sent && (
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-xs font-semibold text-emerald-500">
                      Opening your email app with pre-filled message... Thank you!
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

