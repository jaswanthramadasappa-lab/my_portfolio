"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      const currentProgress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-emerald-400 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(251,146,60,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
