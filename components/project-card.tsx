"use client"

import { ArrowUpRight, Check, ExternalLink, Sparkles } from "lucide-react"
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
      ? "h-10 px-4 text-xs sm:text-sm font-semibold"
      : "h-8.5 px-3 text-xs font-medium"

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card/80 text-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            base,
          )}
        >
          <GitHubIcon className="size-3.5" />
          <span>Code</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground shadow-sm transition-all hover:opacity-95 hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            base,
          )}
        >
          <ExternalLink className="size-3.5" />
          <span>Demo</span>
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
          "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl",
          featured && "sm:flex-row sm:col-span-2 lg:col-span-3",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted/40 p-2 sm:p-2.5",
            featured ? "aspect-video sm:aspect-auto sm:w-1/2" : "aspect-[16/10] w-full",
          )}
        >
          <div className="relative size-full overflow-hidden rounded-2xl border border-border/70 shadow-inner">
            <img
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} — ${project.category} interface preview`}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
              <DialogTrigger className="inline-flex items-center gap-1 rounded-lg bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-md border border-border shadow-md">
                <span>View Details</span>
                <ArrowUpRight className="size-3 text-primary" />
              </DialogTrigger>
            </div>
          </div>
        </div>

        <div className={cn("flex flex-1 flex-col justify-between p-5 sm:p-6", featured && "sm:justify-center sm:p-8")}>
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-500">
                  <Sparkles className="size-2.5" />
                  Featured
                </span>
              )}
            </div>

            <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty line-clamp-3">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-foreground transition-colors hover:border-primary/40"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center justify-between gap-3">
            <ProjectLinks project={project} />
            <DialogTrigger className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span>Inspect</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </DialogTrigger>
          </div>
        </div>
      </article>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-muted border-b border-border">
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
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-500">
                ⭐ Featured Project
              </span>
            )}
          </div>

          <DialogTitle className="mt-2 text-xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {project.longDescription ?? project.description}
          </DialogDescription>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-foreground">Key Architecture &amp; Features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-foreground">Technologies &amp; Libraries</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border bg-card px-2.5 py-1 font-mono text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          {(project.github || project.demo) && (
            <div className="mt-6 border-t border-border pt-5 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Source &amp; Live Deployment</span>
              <ProjectLinks project={project} size="md" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

