"use client"

import { motion } from "motion/react"

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-medium text-foreground">{title}</h2>
        {subtitle && <p className="text-sm text-muted mt-2">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  )
}
