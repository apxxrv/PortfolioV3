"use client"

import { motion } from "framer-motion"

const tools = [
  "TypeScript", "Python", "React", "Next.js", "FastAPI",
  "AWS", "Docker", "PostgreSQL", "Supabase",
  "Bedrock", "GPT-4o", "Gemini", "LangChain",
]

export function TechMarquee() {
  return (
    <section id="skills" className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Stack</h2>
        <p className="text-sm text-muted-foreground mt-2">
          What I reach for most. I pick whatever ships the thing fastest.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2 max-w-2xl"
      >
        {tools.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1.5 rounded-lg border border-border bg-card text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
