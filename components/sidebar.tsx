"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon, Linkedin, Github, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 border-r border-border bg-background p-8 flex-col z-50">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button onClick={() => scrollTo("#home")} className="text-left">
            <p className="text-sm font-medium text-foreground tracking-tight">Apoorv Singh</p>
            <p className="text-xs text-muted-foreground mt-0.5">Software Engineer</p>
          </button>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          )}

          {/* Social links */}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <a href="https://linkedin.com/in/apoorv16" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/apxxrv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:asing512@asu.edu" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <span className="text-xs text-muted-foreground">Available for work</span>
          </div>
        </motion.div>
      </aside>

      {/* Mobile Navigation */}
      <header className="lg:hidden sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm px-4 py-3 w-full">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="text-sm font-medium text-foreground">
            Apoorv Singh
          </button>
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span className="text-xs text-muted-foreground">Available</span>
            </div>
          </div>
        </div>
        <nav className="mt-2 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 whitespace-nowrap py-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`text-xs transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
