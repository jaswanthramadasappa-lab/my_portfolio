"use client"

import { ArrowRight, Award, Briefcase, Download, ExternalLink, FileText, GraduationCap, MapPin, Sparkles } from "lucide-react"
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { RoleRotator } from "@/components/role-rotator"
import { ResumeModal } from "@/components/resume-modal"
import { focusAreas, personal, resumeUrl, socials } from "@/data/portfolio"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon },
]

const marqueeTechs = [
  "React.js",
  "Node.js",
  "Python",
  "SQL & Relational DB",
  "Generative AI",
  "JavaScript (ES6+)",
  "Express.js",
  "RESTful APIs",
  "Tailwind CSS",
  "Data Structures & Algorithms",
  "Git & GitHub",
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Dynamic Background Aurora Mesh & Grids */}
      <div className="aurora-bg">
        <div className="aurora-blob-1" />
        <div className="aurora-blob-2" />
        <div className="aurora-blob-3" />
        <div className="absolute inset-0 grid-pattern opacity-45 dark:opacity-25" />
      </div>

      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          {/* Left Hero Content */}
          <div className="flex flex-col items-start text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/80 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-semibold">Open to Internships &amp; Placements</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="font-mono text-[11px] text-muted-foreground">Class of 2028</span>
            </div>

            {/* Name and Heading */}
            <div className="mt-5 sm:mt-6">
              <p className="font-mono text-xs font-semibold tracking-widest text-primary uppercase sm:text-sm">
                👋 Hello World, I&apos;m
              </p>
              <h1 className="mt-1.5 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient block">{personal.fullName}</span>
              </h1>
            </div>

            {/* Role Rotator Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-base font-medium sm:text-xl md:text-2xl text-foreground">
              <span className="text-muted-foreground font-normal">Specializing as a</span>
              <div className="inline-flex items-center rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-1 font-bold text-primary backdrop-blur-sm shadow-inner">
                <RoleRotator roles={personal.tagline} />
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base text-pretty">
              B.Tech Computer Science Engineering student at <strong className="font-semibold text-foreground">{personal.collegeShort}</strong>. 
              Passionate about engineering responsive, high-performance web applications with React, Node.js, and SQL, while mastering algorithmic problem-solving and exploring Generative AI workflows.
            </p>

            {/* Call To Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="shimmer-btn group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Explore Projects</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <ResumeModal
                trigger={
                  <button
                    type="button"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card/80 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <FileText className="size-4 text-primary" />
                    <span>View Resume</span>
                  </button>
                }
              />

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Jaswanth_Ramadasappa_Gari_Resume.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border/80 bg-muted/40 px-4 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
              >
                <Download className="size-4 text-primary" />
                <span>PDF</span>
              </a>
            </div>

            {/* Social Links & Focus Area Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-5 border-t border-border/60 w-full">
              <ul className="flex items-center gap-2">
                {socialItems.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} profile`}
                      className="group inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card/70 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:bg-card hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="size-4 transition-transform group-hover:scale-110" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="h-5 w-px bg-border hidden sm:block" aria-hidden="true" />

              <ul className="flex flex-wrap gap-1.5">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1 font-mono text-[11px] text-muted-foreground shadow-xs"
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Portrait & Holographic Card */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* Ambient Multi-layer Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-teal-400/30 blur-2xl opacity-75 animate-pulse" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-card/85 p-2.5 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                <img
                  src={personal.photo || "/placeholder.svg"}
                  alt={`Portrait of ${personal.fullName}`}
                  width={640}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"
                  aria-hidden="true"
                />

                {/* Floating Highlights Inside Frame */}
                <div className="absolute bottom-3 inset-x-3 rounded-xl border border-border/80 bg-background/90 p-3.5 backdrop-blur-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-foreground">{personal.fullName}</p>
                      <p className="font-mono text-xs text-primary">{personal.degree}</p>
                    </div>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary">
                      {personal.collegeShort}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3 text-primary" /> {personal.location}
                    </span>
                    <span>🎓 2024–2028</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Marquee Tech Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-card/40 py-2.5 backdrop-blur-md">
          <div className="animate-marquee gap-8 items-center text-xs font-mono text-muted-foreground">
            {marqueeTechs.concat(marqueeTechs).map((tech, idx) => (
              <span key={`${tech}-${idx}`} className="inline-flex items-center gap-2 shrink-0">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-foreground/90 font-medium">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Live Metrics Dock Ribbon */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <p className="font-mono text-lg font-bold text-foreground sm:text-xl">B.Tech CSE</p>
              <p className="text-xs text-muted-foreground">MITS Madanapalle</p>
            </div>
          </div>

          <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Award className="size-5" />
            </span>
            <div>
              <p className="font-mono text-lg font-bold text-foreground sm:text-xl">10+ Credentials</p>
              <p className="text-xs text-muted-foreground">NxtWave CCBP Academy</p>
            </div>
          </div>

          <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Briefcase className="size-5" />
            </span>
            <div>
              <p className="font-mono text-lg font-bold text-foreground sm:text-xl">8-Week Internship</p>
              <p className="text-xs text-muted-foreground">RD INFRO TECHNOLOGY</p>
            </div>
          </div>

          <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="font-mono text-lg font-bold text-foreground sm:text-xl">6+ Projects</p>
              <p className="text-xs text-muted-foreground">Full Stack, AI &amp; Games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

