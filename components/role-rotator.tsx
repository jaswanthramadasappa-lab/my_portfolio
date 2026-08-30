"use client"

import { useEffect, useState } from "react"

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced || roles.length <= 1) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-block align-bottom">
      <span className="sr-only">{roles.join(", ")}</span>
      <span
        key={index}
        aria-hidden="true"
        className="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-semibold text-transparent duration-500 animate-in fade-in slide-in-from-bottom-2 motion-reduce:animate-none"
      >
        {roles[index]}
      </span>
    </span>
  )
}
