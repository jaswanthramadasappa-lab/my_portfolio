import { Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/data/certifications"

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & credentials"
          description="Certificates earned while building my foundation across web development, JavaScript, React, databases and backend fundamentals."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              as="article"
              delay={Math.min(i * 50, 250)}
              className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-muted-foreground">
                  {cert.focus}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug tracking-tight text-balance">
                {cert.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
