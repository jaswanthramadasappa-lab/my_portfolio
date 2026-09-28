"use client"

import { useState } from "react"
import { Award, CheckCircle2, ExternalLink, Filter, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { certifications, type Certification } from "@/data/certifications"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Frontend", "Backend & DB", "Full Stack", "Foundations"] as const
type CategoryFilter = (typeof CATEGORIES)[number]

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All")

  const filteredCerts = selectedCategory === "All"
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory)

  return (
    <section id="certifications" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified Industry Credentials"
          description="Official certificates of achievement earned through the NxtWave CCBP 4.0 Intensive Academy, validating hands-on mastery in full-stack web engineering, databases, algorithms, and practical development workflows."
        />

        {/* Highlights stats banner */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-3xl border border-primary/25 bg-primary/5 p-4 sm:grid-cols-4 sm:p-6 backdrop-blur-md">
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-extrabold text-primary sm:text-3xl">10</span>
              <span className="text-xs text-muted-foreground sm:text-sm font-medium">Verified Credentials</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-extrabold text-primary sm:text-3xl">NxtWave</span>
              <span className="text-xs text-muted-foreground sm:text-sm font-medium">CCBP 4.0 Academy</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-extrabold text-primary sm:text-3xl">100%</span>
              <span className="text-xs text-muted-foreground sm:text-sm font-medium">Project Evaluated</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-extrabold text-primary sm:text-3xl">Full Stack</span>
              <span className="text-xs text-muted-foreground sm:text-sm font-medium">Industry Specialization</span>
            </div>
          </div>
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal delay={80} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => {
            const count = category === "All" 
              ? certifications.length 
              : certifications.filter((c) => c.category === category).length

            const isActive = selectedCategory === category

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                    isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </Reveal>

        {/* Certification Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, i) => (
            <Reveal
              key={cert.slug}
              as="article"
              delay={Math.min(i * 40, 240)}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {/* Certificate Image Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-muted/40 p-2.5">
                      <div className="relative size-full overflow-hidden rounded-2xl border border-border/70 shadow-inner">
                        <img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          width={520}
                          height={332}
                          loading="lazy"
                          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-2.5">
                          <span className="inline-flex items-center gap-1 rounded-lg border border-border/80 bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md shadow-md">
                            <ExternalLink className="size-3 text-primary" />
                            View Full Certificate
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                            <ShieldCheck className="size-3" />
                            {cert.focus}
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {cert.category}
                          </span>
                        </div>

                        <h3 className="mt-3 text-base sm:text-lg font-bold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>

                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {cert.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-muted-foreground">
                            Issuer: <strong className="font-semibold text-foreground">NxtWave</strong>
                          </span>
                          <span className="text-xs font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                            <span>Inspect Credential</span>
                            <Award className="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {/* Lightbox / Modal for Certificate */}
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl border-b border-border bg-muted">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate of Achievement`}
                      width={1040}
                      height={664}
                      className="size-full object-contain p-2"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <ShieldCheck className="size-3.5" />
                        Verified Achievement
                      </span>
                      <span className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        {cert.category}
                      </span>
                    </div>

                    <DialogTitle className="mt-3 text-xl font-bold">{cert.title}</DialogTitle>
                    <DialogDescription className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </DialogDescription>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-border bg-muted/30 p-3.5 text-xs">
                      <div>
                        <span className="text-muted-foreground">Recipient:</span>
                        <p className="font-bold text-foreground">{cert.recipient}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Issuing Organization:</span>
                        <p className="font-bold text-foreground">{cert.issuer}</p>
                      </div>
                    </div>

                    <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-foreground">
                      Key Competencies &amp; Technologies
                    </h4>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground"
                        >
                          <CheckCircle2 className="size-3 text-primary" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">
                        CCBP 4.0 Intensive Curriculum
                      </span>
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
                      >
                        <ExternalLink className="size-3.5" />
                        <span>Open Full Image</span>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

