import { Briefcase, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <Reveal className="mt-10">
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{experience.role}</h3>
                  <p className="text-primary">{experience.company}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {experience.dates} · {experience.duration}
                  </p>
                </div>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Internship
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
              {experience.summary}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
