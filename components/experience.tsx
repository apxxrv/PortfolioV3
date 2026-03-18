"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Founding Engineer",
    company: "STILED AI",
    period: "Nov 2025 — Present",
    location: "Remote",
    highlights: [
      "AI Chrome extension for virtual try-on across 5 retail platforms, 10,000+ SKUs",
      "Reduced pipeline latency 40s → 3s via MediaPipe + K-Means CV redesign",
      "Node.js/Express backend with Flask microservices and real-time cross-platform scraping",
    ],
  },
  {
    role: "Software Developer",
    company: "ASU CIC / Amazon Web Services — iECHO",
    period: "Apr 2025 — Present",
    location: "Tempe, AZ",
    highlights: [
      "Microservices on EKS Fargate + API Gateway serving 250,000+ rural healthcare workers",
      "Document pipeline: Python crawlers → S3 → Bedrock → Titan Embeddings — 90% retrieval accuracy",
      "React/TypeScript frontend with offline-first mobile, real-time chat, and DynamoDB analytics",
    ],
  },
  {
    role: "Software Development Intern",
    company: "AGCO Corporation",
    period: "May — Sep 2024",
    location: "Duluth, GA",
    highlights: [
      "Upgraded Salesforce REST APIs v58 → v60 across 600+ Apex classes",
      "Refactored legacy codebase, reducing technical debt; authored scalability docs adopted by platform team",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Profila",
    period: "Nov 2021 — Jul 2022",
    location: "Lucerne, Switzerland",
    highlights: [
      "HubSpot CMS + Cloudflare CDN integration for 20,000+ users — 30% page load improvement",
      "Built responsive web app (React/Next.js) and native Android app (Kotlin/Jetpack Compose)",
    ],
  },
]

export function Experience() {
  return (
    <section className="relative py-24 px-8 md:px-12 md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — EXPERIENCE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Where I've Shipped</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent origin-top hidden md:block"
        />

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative md:pl-12 py-10 border-b border-foreground/10 last:border-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-12 w-px h-px hidden md:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="w-2 h-2 rounded-full bg-accent -translate-x-[3px] -translate-y-[3px]"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                {/* Period + Location */}
                <div className="md:w-56 shrink-0">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground">{exp.period}</p>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground/60 mt-1">{exp.location}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight mb-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs tracking-wider text-accent mb-5">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-[10px] text-accent mt-[3px] shrink-0">—</span>
                        <span className="font-mono text-xs text-muted-foreground leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
