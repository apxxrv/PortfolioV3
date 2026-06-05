"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Founding Software Engineer",
    company: "STILED AI",
    url: "https://thestiled.com",
    period: "Dec 2024 — Present",
    description:
      "Building an AI virtual try-on platform — Chrome extension that works across 10+ retail sites, agentic outfit recs with Gemini, and an SMS pipeline that captures purchase intent in under 2 minutes. 300+ beta users, featured in Business of Fashion.",
  },
  {
    role: "Cloud & Frontend Developer",
    company: "ASU CIC × AWS — Project ECHO",
    url: "https://smartchallenges.asu.edu/challenges/knowledge-access-chatbot-project-echo",
    period: "May — Aug 2025",
    description:
      "Led a team building a RAG chatbot for Project ECHO — a global NGO moving expert medical knowledge to frontline workers. Full ingestion pipeline on EKS Fargate with Bedrock vector storage. 250K+ healthcare workers across 38 countries.",
  },
  {
    role: "Cloud Developer",
    company: "ASU CIC × AWS — Cintana Education",
    url: "https://smartchallenges.asu.edu/challenges/multilingual-admissions-agent-cintana-education",
    period: "Sep — Nov 2025",
    description:
      "Multilingual AI agent that guides students from inquiry through enrollment. Event-driven WhatsApp pipeline with Twilio, DynamoDB session tracking, and Salesforce CRM integration. 30+ universities, 28 countries.",
  },
  {
    role: "Software Engineering Intern",
    company: "AGCO Corporation",
    period: "May — Sep 2024",
    description:
      "Upgraded Salesforce REST APIs to v60.0, refactored 600+ Apex classes. My first time seeing what enterprise-scale technical debt actually looks like.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-medium text-foreground">Experience</h2>
      </motion.div>

      <div className="space-y-8 md:space-y-10 max-w-3xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-[15px] md:text-base lg:text-lg font-medium text-foreground">{exp.role}</h3>
              <span className="text-xs text-muted-foreground shrink-0">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 underline decoration-border hover:decoration-foreground"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            <p className="text-sm md:text-[15px] text-muted-foreground mt-3 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
