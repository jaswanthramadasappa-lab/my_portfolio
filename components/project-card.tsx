"use client"

import { ArrowUpRight, Check, ExternalLink } from "lucide-react"
import { GitHubIcon } from "@/components/icons"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  const base =
    size === "md"
      ? "h-10 px-4 text-sm"
      : "h-9 px-3 text-xs"
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border border-border bg-card font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            base,
          )}
        >
          <GitHubIcon className="size-4" />
          Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 rounded-lg bg-primary font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            base,
          )}
        >
          <ExternalLink className="size-4" />
          Live demo
        </a>
      )}
    </div>
  )
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Dialog>
      <article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30",
          featured && "sm:flex-row",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            featured ? "aspect-video sm:aspect-auto sm:w-1/2" : "aspect-video w-full",
          )}
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} — ${project.category} interface preview`}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        </div>

        <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "sm:justify-center")}>
          <p className="font-mono text-xs tracking-wider text-primary uppercase">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between gap-3">
            <ProjectLinks project={project} />
            <DialogTrigger className="inline-flex items-center gap-1 rounded-md text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Details
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </DialogTrigger>
          </div>
        </div>
      </article>

      <DialogContent>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} — ${project.category} interface preview`}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
        <div className="p-6">
          <p className="font-mono text-xs tracking-wider text-primary uppercase">
            {project.category}
          </p>
          <DialogTitle className="mt-2">{project.title}</DialogTitle>
          <DialogDescription className="mt-2 leading-relaxed">
            {project.longDescription ?? project.description}
          </DialogDescription>

          <h4 className="mt-6 text-sm font-semibold">Key features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-sm font-semibold">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          {(project.github || project.demo) && (
            <div className="mt-6 border-t border-border pt-5">
              <ProjectLinks project={project} size="md" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
