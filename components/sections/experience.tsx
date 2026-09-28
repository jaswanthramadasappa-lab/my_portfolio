"use client"

import { Award, Briefcase, Calendar, CheckCircle2, ExternalLink, FileCheck, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/data/portfolio"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const keyDeliverables = [
  "Architected modular React.js frontend components with dynamic state management.",
  "Integrated RESTful backend APIs and handled asynchronous data feeds efficiently.",
  "Designed responsive, mobile-first layouts ensuring cross-browser consistency.",
  "Collaborated using Git version control and followed industry-standard coding conventions.",
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Industrial Experience"
          description="Hands-on web development internship experience architecting responsive frontend interfaces and working with production web engineering workflows."
        />

        <Reveal className="mt-10">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 sm:p-8 md:p-10 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-2xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-amber-500/20 to-teal-400/20 text-primary shadow-sm border border-primary/20">
                    <Briefcase className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{experience.role}</h3>
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                        {experience.type}
                      </span>
                    </div>
                    <p className="mt-1 text-base sm:text-lg font-bold text-primary">{experience.company}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Calendar className="size-3.5 text-primary" aria-hidden="true" />
                      {experience.dates} · <span className="text-foreground font-semibold">{experience.duration}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                  {experience.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Key Contributions &amp; Scope</h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {keyDeliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accreditations & Reg Info */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.accreditations.map((acc) => (
                    <span
                      key={acc}
                      className="inline-flex items-center gap-1 rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      <ShieldCheck className="size-3.5" />
                      {acc}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1 rounded-xl border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    CID: {experience.certificateId}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Technologies Applied
                  </h4>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Certificate Card & Modal Trigger */}
              <div className="mt-4 w-full lg:mt-0 lg:w-72 shrink-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card/80 p-3 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/80 bg-muted shadow-sm">
                        <img
                          src={experience.certificateImage}
                          alt="RD INFRO TECHNOLOGY Internship Completion Certificate"
                          width={492}
                          height={717}
                          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-3">
                          <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
                            <FileCheck className="size-3.5" />
                            Inspect Full Certificate
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">Official Certificate</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline">
                          View <ExternalLink className="size-3" />
                        </span>
                      </div>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                        Verified by RD INFRO TECHNOLOGY
                      </p>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-border bg-muted">
                      <img
                        src={experience.certificateImage}
                        alt="RD INFRO TECHNOLOGY Internship Certificate"
                        width={492}
                        height={717}
                        className="size-full object-contain p-2"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <Award className="size-3.5" />
                          Internship Completion Certificate
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          CID: {experience.certificateId}
                        </span>
                      </div>

                      <DialogTitle className="mt-3 text-lg sm:text-xl font-bold">
                        Web Development Internship — {experience.company}
                      </DialogTitle>
                      <DialogDescription className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Officially awarded to Jaswanth R for completing an intensive 8-week offline internship program in Web Development from 19/05/2026 to 18/07/2026.
                      </DialogDescription>

                      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-border bg-muted/30 p-3.5 text-xs">
                        <div>
                          <span className="text-muted-foreground">Reg No:</span>
                          <p className="font-mono font-bold text-foreground">{experience.regNo}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Accreditation:</span>
                          <p className="font-bold text-foreground">AICTE &amp; MSME Approved</p>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <span className="text-xs text-muted-foreground">
                          Authorized by RD INFRO TECHNOLOGY
                        </span>
                        <a
                          href={experience.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
                        >
                          <ExternalLink className="size-3.5" />
                          Open Full Resolution
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

