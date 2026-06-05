"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="px-5 py-16 sm:px-8 md:px-10 lg:px-12 lg:py-32">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium leading-tight tracking-tight text-foreground"
        >
          Apoorv Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-sm sm:text-[15px] md:text-base text-muted-foreground leading-relaxed"
        >
          I build AI products and ship them to real people. Currently co-founding{" "}
          <a href="https://trace-ai.co" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            Trace
          </a>
          {" "}— an intent-aware memory layer for AI coding agents — and building at{" "}
          <a href="https://thestiled.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            STILED
          </a>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-sm sm:text-[15px] md:text-base text-muted-foreground leading-relaxed"
        >
          My favorite thing is taking something that feels impossible — RAG for 250K healthcare workers,
          AI try-on that actually works — and making it real. CS @ ASU.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="mailto:asing512@asu.edu"
            className="inline-flex items-center px-5 py-2.5 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200 active:scale-95"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm border border-border rounded-lg text-foreground hover:bg-accent transition-colors duration-200 active:scale-95"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
