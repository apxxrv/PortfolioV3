"use client"

import { motion } from "framer-motion"

const tools = [
  "TypeScript", "Python", "React", "Next.js", "FastAPI",
  "AWS", "Docker", "PostgreSQL", "Supabase",
  "Bedrock", "GPT-4o", "Gemini", "LangChain",
]

export function TechMarquee() {
  return (
    <section id="skills" className="px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 md:mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-medium text-foreground">Stack</h2>
        <p className="text-sm text-muted-foreground mt-2">
          What I reach for most. I pick whatever ships the thing fastest.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2 md:gap-2.5 max-w-2xl"
      >
        {tools.map((item) => (
          <span
            key={item}
            className="text-xs md:text-[13px] px-3 py-1.5 md:px-3.5 md:py-2 rounded-lg border border-border bg-card text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
