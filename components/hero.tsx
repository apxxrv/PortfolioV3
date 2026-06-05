"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground"
        >
          Apoorv Singh
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-lg lg:text-xl text-muted-foreground"
        >
          Founding Engineer · Co-Founder @ Trace
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl"
        >
          I build AI products that ship to real users — from virtual try-on platforms with 300+ beta users
          to RAG systems serving 250K+ healthcare workers across 38 countries. CS @ Arizona State University,
          GPA 3.8.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 flex flex-wrap gap-6"
        >
          {[
            { label: "Projects shipped", value: "6+" },
            { label: "Users served", value: "250K+" },
            { label: "Countries", value: "38" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl lg:text-3xl font-medium text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="mailto:asing512@asu.edu"
            className="inline-flex items-center px-4 py-2 text-sm bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm border border-border rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
