"use client"

import { motion } from "motion/react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-medium text-foreground">Say hi</h2>
        <p className="text-[15px] text-muted mt-3 leading-relaxed">
          Always down to talk about AI, startups, or whatever you&apos;re building.
        </p>

        <a
          href="mailto:asing512@asu.edu"
          className="inline-flex items-center gap-2 mt-5 text-sm text-primary hover:opacity-80 transition-opacity"
        >
          asing512@asu.edu
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </motion.div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex gap-5">
          <a href="https://linkedin.com/in/apoorv16" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/apxxrv" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-xs text-muted">© 2025 Apoorv Singh</p>
      </div>
    </section>
  )
}
