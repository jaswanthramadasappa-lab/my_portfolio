import { GraduationCap, MapPin, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { aboutCards, personal } from "@/data/portfolio"

const icons = [GraduationCap, Building2, MapPin]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="A developer who enjoys building useful things"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p className="text-pretty">{personal.bio}</p>
            <p className="text-pretty">
              I care about clean, accessible interfaces and writing code that is easy to reason
              about. Right now I&apos;m focused on strengthening my fundamentals in Data Structures
              &amp; Algorithms and shipping full-stack projects end to end.
            </p>
          </Reveal>

          <Reveal delay={100} className="grid gap-3 sm:grid-cols-1">
            {aboutCards.map((card, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={card.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      {card.label}
                    </p>
                    <p className="mt-0.5 font-semibold">{card.value}</p>
                    <p className="truncate text-sm text-muted-foreground">{card.sub}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
