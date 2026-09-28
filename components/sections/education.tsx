"use client"

import { Award, BookOpen, GraduationCap, School } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/data/portfolio"

const icons = [GraduationCap, BookOpen, School]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background &amp; Milestones"
          description="My educational journey in Computer Science Engineering and pre-university sciences, grounded in high academic consistency."
        />

        <ol className="mt-12 space-y-0">
          {education.map((item, i) => {
            const Icon = icons[i] || GraduationCap
            return (
              <Reveal
                key={item.school}
                as="li"
                delay={Math.min(i * 80, 240)}
                className="relative grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="mt-2 flex size-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-sm">
                    <Icon className="size-4.5" />
                  </span>
                  {i < education.length - 1 && (
                    <span className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-border/40" aria-hidden="true" />
                  )}
                </div>
                <div className="group rounded-3xl border border-border bg-card/70 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {item.school}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm font-medium text-muted-foreground">{item.qualification}</p>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1 mt-1 sm:mt-0">
                      <span className="font-mono text-xs text-muted-foreground rounded-md bg-muted/60 px-2 py-0.5">
                        {item.period}
                      </span>
                      {item.result && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-500">
                          <Award className="size-3" />
                          <span>{item.result} Distinction</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

