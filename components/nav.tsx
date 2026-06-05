"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-10 flex items-center justify-between h-14">
        <a href="#" className="text-sm font-medium text-foreground">
          apoorv
        </a>

        <div className="flex items-center gap-5">
          <a href="#experience" className="text-xs text-muted hover:text-foreground transition-colors hidden sm:block">
            Experience
          </a>
          <a href="#projects" className="text-xs text-muted hover:text-foreground transition-colors hidden sm:block">
            Projects
          </a>
          <a href="#contact" className="text-xs text-muted hover:text-foreground transition-colors hidden sm:block">
            Contact
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted hover:text-foreground transition-colors p-1.5 -m-1.5"
              aria-label="Toggle theme"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {theme === "dark" ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                )}
              </svg>
            </button>
          )}

          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="text-[11px] text-muted">Available</span>
          </div>
        </div>
      </div>
    </header>
  )
}
