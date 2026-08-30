import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { GitHubIcon } from "@/components/icons"
import { projects } from "@/data/projects"
import { socials } from "@/data/portfolio"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A collection of applications I've designed and built — from e-commerce and video streaming platforms to AI-driven automation. Open any project for the full breakdown."
        />

        <div className="mt-10 flex flex-col gap-5">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 80, 240)}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 80, 240)} className="h-full">
              <div className="h-full [&>article]:h-full">
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <GitHubIcon className="size-4" />
            See more on GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
