"use client"

import { useState } from "react"
import { ArrowUpRight, Code, ExternalLink, Sparkles } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { GitHubIcon } from "@/components/icons"
import { projects } from "@/data/projects"
import { socials } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Featured", "E-commerce & Streaming", "AI & Automation", "Interactive Web"] as const
type ProjectFilter = (typeof CATEGORIES)[number]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All")

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return p.featured
    if (activeFilter === "E-commerce & Streaming")
      return p.category.toLowerCase().includes("commerce") || p.category.toLowerCase().includes("streaming") || p.category.toLowerCase().includes("job")
    if (activeFilter === "AI & Automation")
      return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("automation")
    if (activeFilter === "Interactive Web")
      return p.category.toLowerCase().includes("game") || p.category.toLowerCase().includes("search")
    return true
  })

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Engineering Work"
          description="A showcase of real-world web applications I've designed and built — ranging from full-stack e-commerce and video streaming platforms to AI-driven workflow engines. Click any project for the architectural breakdown."
        />

        {/* Filter Pills */}
        <Reveal delay={60} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const count = projects.filter((p) => {
              if (cat === "All") return true
              if (cat === "Featured") return p.featured
              if (cat === "E-commerce & Streaming")
                return p.category.toLowerCase().includes("commerce") || p.category.toLowerCase().includes("streaming") || p.category.toLowerCase().includes("job")
              if (cat === "AI & Automation")
                return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("automation")
              if (cat === "Interactive Web")
                return p.category.toLowerCase().includes("game") || p.category.toLowerCase().includes("search")
              return true
            }).length

            const isActive = activeFilter === cat

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 60, 240)} className="h-full">
              <div className="h-full [&>article]:h-full">
                <ProjectCard project={project} featured={project.featured && activeFilter === "All" && i < 2} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA Banner */}
        <Reveal className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md">
            <div>
              <h4 className="text-base font-bold text-foreground">Explore more repositories on GitHub</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Check out all active codebases, utility scripts, and open-source contributions.
              </p>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-95 hover:shadow-primary/25 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <GitHubIcon className="size-4" />
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

