import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks and tools I use to design and build web applications."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={Math.min(i * 60, 240)}
              as="article"
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <h3 className="text-sm font-semibold tracking-tight">{category.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
