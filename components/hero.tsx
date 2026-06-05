"use client"

import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground"
      >
        Apoorv Singh
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted"
      >
        <p>
          I build AI products and ship them to real people. Currently co-founding{" "}
          <a href="https://trace-ai.co" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            Trace
          </a>
          {" "}— an intent-aware memory layer for AI coding agents — and building at{" "}
          <a href="https://thestiled.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            STILED
          </a>.
        </p>
        <p>
          My favorite thing is taking something that feels impossible — RAG for 250K
          healthcare workers, AI try-on that actually works — and making it real. CS @ ASU.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex gap-3"
      >
        <a
          href="mailto:asing512@asu.edu"
          className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity active:scale-95"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm border border-border rounded-md text-foreground hover:bg-accent transition-colors active:scale-95"
        >
          Resume
        </a>
      </motion.div>
    </section>
  )
}
