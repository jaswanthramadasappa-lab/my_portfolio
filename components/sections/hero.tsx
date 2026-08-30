import { ArrowRight } from "lucide-react"
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { RoleRotator } from "@/components/role-rotator"
import { focusAreas, personal, socials } from "@/data/portfolio"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop" aria-hidden="true" />
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to internships &amp; placements
            </span>

            <h1 className="mt-6 text-pretty text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-muted-foreground text-lg font-medium tracking-normal sm:text-xl">
                Hi, I&apos;m
              </span>
              <span className="text-gradient mt-1 block">Jaswanth</span>
            </h1>

            <p className="mt-5 flex flex-wrap items-baseline gap-x-2 text-xl font-medium sm:text-2xl">
              <span className="text-muted-foreground">A</span>
              <RoleRotator roles={personal.tagline} />
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              B.Tech Computer Science student at {personal.collegeShort}, building responsive,
              user-friendly web applications with modern frontend and backend technologies — while
              sharpening my DSA skills and exploring Generative AI.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card/50 px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <ul className="flex items-center gap-2">
                {socialItems.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} profile`}
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="h-6 w-px bg-border" aria-hidden="true" />
              <ul className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={personal.photo || "/placeholder.svg"}
                alt={`Portrait of ${personal.fullName}`}
                width={640}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 w-[92%] -translate-x-1/2 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur">
              <p className="truncate text-sm font-semibold">{personal.fullName}</p>
              <p className="truncate text-xs text-muted-foreground">
                {personal.degree} · {personal.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
