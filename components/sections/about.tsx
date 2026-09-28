"use client"

import { Building2, Code2, Cpu, Database, GraduationCap, MapPin, Sparkles, Terminal, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { aboutCards, personal } from "@/data/portfolio"

const icons = [GraduationCap, Building2, MapPin]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering practical solutions with code & curiosity"
          description="A comprehensive overview of my technical journey, academic background at MITS, and engineering principles."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          {/* Left Bio & Engineering Pillars */}
          <Reveal className="space-y-6 text-muted-foreground">
            <div className="rounded-3xl border border-border bg-card/70 p-6 sm:p-8 backdrop-blur-md shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
                <span className="size-2 rounded-full bg-primary" />
                <span>Background &amp; Philosophy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Aspiring Full Stack Engineer &amp; AI Innovator
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-pretty">
                {personal.bio}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-pretty">
                I believe in writing clean, scalable, and well-documented code that solves real-world challenges. Whether architecting dynamic single-page applications with React and REST APIs, modeling relational SQL databases, or developing autonomous AI agent workflows, I bring curiosity, consistency, and a problem-solving mindset to every project.
              </p>
            </div>

            {/* Engineering Pillars Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="group rounded-2xl border border-border bg-card/50 p-4.5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-card hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-500 transition-transform group-hover:scale-110">
                    <Code2 className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Frontend Engineering</h4>
                    <p className="text-xs text-muted-foreground">React, Modern CSS &amp; UX</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Crafting dynamic, mobile-first, and accessible interfaces with state-driven architectures.
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/50 p-4.5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-card hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-transform group-hover:scale-110">
                    <Terminal className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Backend &amp; APIs</h4>
                    <p className="text-xs text-muted-foreground">Node.js, Express &amp; REST</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Building robust endpoints, authentication middleware, and modular server logic.
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/50 p-4.5 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-card hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110">
                    <Database className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Database Engineering</h4>
                    <p className="text-xs text-muted-foreground">SQL, Modeling &amp; Queries</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Relational schema design, complex joins, indexing, and data integrity operations.
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/50 p-4.5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-card hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-transform group-hover:scale-110">
                    <Sparkles className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Agentic AI &amp; LLMs</h4>
                    <p className="text-xs text-muted-foreground">Autonomous Workflows</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Exploring multi-agent orchestration, prompt design, and AI-powered task automation.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Cards & Status Box */}
          <Reveal delay={100} className="flex flex-col gap-4">
            {aboutCards.map((card, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={card.label}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      {card.label}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-bold text-foreground">{card.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{card.sub}</p>
                  </div>
                </div>
              )
            })}

            {/* Quick Status Box */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span>Active Roadmap</span>
                </div>
                <span className="font-mono text-[10px] rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-primary">
                  2025–2026 Focus
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Strengthening algorithmic problem solving &amp; DSA on LeetCode.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Engineering end-to-end full-stack web applications with React &amp; Node.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span>Implementing autonomous multi-agent pipelines and generative AI tools.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

