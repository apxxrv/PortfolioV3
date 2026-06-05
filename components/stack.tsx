"use client"

import { motion } from "motion/react"
import { Section } from "./section"

const tools = [
  "TypeScript", "Python", "React", "Next.js", "FastAPI",
  "AWS", "Docker", "PostgreSQL", "Supabase",
  "Bedrock", "GPT-4o", "Gemini", "LangChain",
]

export function Stack() {
  return (
    <Section id="stack" title="Stack" subtitle="What I reach for most. I pick whatever ships the thing fastest.">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2"
      >
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-3 py-1.5 rounded-md border border-border bg-card text-muted"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </Section>
  )
}
