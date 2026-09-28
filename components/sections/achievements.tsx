"use client"

import { Award, CheckCircle2, Code2, Sparkles, Trophy } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { achievements } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const achievementIcons = [Trophy, Code2, CheckCircle2]

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Honors &amp; Awards"
          title="Competitive Achievements"
          description="Recognition in university project expos, algorithmic coding competitions, and technical assessments."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = achievementIcons[i] || Trophy

            return (
              <Reveal
                key={item.title}
                delay={Math.min(i * 70, 210)}
                as="article"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-2xl transition-transform group-hover:scale-110",
                        item.badgeColor === "amber"
                          ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                          : item.badgeColor === "cyan"
                            ? "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20"
                            : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 font-mono text-xs font-bold shadow-xs",
                        item.badgeColor === "amber"
                          ? "border border-amber-500/30 bg-amber-500/10 text-amber-500"
                          : item.badgeColor === "cyan"
                            ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-500"
                            : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
                      )}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </p>

                  <h3 className="mt-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Verified Honor</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    <Sparkles className="size-3" />
                    <span>Academic &amp; Tech</span>
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
