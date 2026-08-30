import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/data/portfolio"

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <ol className="mt-10 space-y-0">
          {education.map((item, i) => (
            <Reveal
              key={item.school}
              as="li"
              delay={Math.min(i * 80, 200)}
              className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="mt-1.5 size-3 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
                {i < education.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>
              <div className="-mt-0.5 flex flex-col gap-1 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold tracking-tight">{item.school}</h3>
                  <p className="text-sm text-muted-foreground">{item.qualification}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  {item.result && (
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-medium text-primary">
                      {item.result}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
