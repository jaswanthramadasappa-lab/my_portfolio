import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/icons"
import { personal, socials } from "@/data/portfolio"

const socialItems = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "LeetCode", href: socials.leetcode, Icon: LeetCodeIcon },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-mono text-sm font-semibold">
            {personal.shortName}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            © {year} {personal.fullName}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {socialItems.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} profile`}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
