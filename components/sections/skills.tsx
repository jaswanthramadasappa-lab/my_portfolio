"use client"

import { useState } from "react"
import { Cpu, Database, Layout, Search, Server, Sparkles, Terminal, Wrench, X } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillCategories } from "@/data/skills"
import { cn } from "@/lib/utils"

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  sparkles: Sparkles,
  tool: Wrench,
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const totalCompetencies = skillCategories.reduce(
    (acc, category) => acc + category.skills.length,
    0,
  )

  const filteredCategories = skillCategories
    .filter((cat) => (selectedCategory === "All" ? true : cat.title === selectedCategory))
    .map((cat) => {
      if (!searchQuery.trim()) return cat
      const query = searchQuery.toLowerCase()
      const matchingSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          (s.tag && s.tag.toLowerCase().includes(query)) ||
          cat.title.toLowerCase().includes(query),
      )
      return {
        ...cat,
        skills: matchingSkills,
      }
    })
    .filter((cat) => cat.skills.length > 0)

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/80 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies &amp; Engineering Toolset"
          description="A categorized breakdown of programming languages, frontend frameworks, backend runtimes, databases, and modern developer tooling I use to craft production software."
        />

        {/* Controls: Search & Category Pills */}
        <Reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selectedCategory === "All"
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              <span>All Toolsets</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                  selectedCategory === "All"
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {totalCompetencies}
              </span>
            </button>

            {skillCategories.map((cat) => {
              const isActive = selectedCategory === cat.title
              return (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(cat.title)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  <span>{cat.title}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skill (e.g., React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card/60 pl-8 pr-8 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        </Reveal>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              No skills found matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, i) => {
              const Icon = iconMap[category.iconName] || Terminal

              return (
                <Reveal
                  key={category.title}
                  delay={Math.min(i * 50, 250)}
                  as="article"
                  className="group flex flex-col justify-between rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="group/pill inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-[1.03]"
                        >
                          <span className="font-mono text-[11px]">{skill.name}</span>
                          {skill.tag && (
                            <span
                              className={cn(
                                "rounded-md px-1.5 py-0.2 font-mono text-[9px] font-bold",
                                skill.tag === "Primary"
                                  ? "bg-amber-500/15 text-amber-500"
                                  : skill.tag === "Certified"
                                    ? "bg-emerald-500/15 text-emerald-500"
                                    : skill.tag === "Focus"
                                      ? "bg-indigo-500/15 text-indigo-500"
                                      : "bg-primary/15 text-primary",
                              )}
                            >
                              {skill.tag}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="font-mono">{category.skills.length} skills</span>
                    <span className="text-primary font-medium group-hover:underline">Hands-on Experience</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

