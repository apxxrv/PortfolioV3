"use client"

import { motion } from "motion/react"
import { Section } from "./section"

const jobs = [
  {
    role: "Founding Software Engineer",
    company: "STILED AI",
    url: "https://thestiled.com",
    period: "Dec 2024 — Present",
    description:
      "Building an AI virtual try-on platform — Chrome extension across 10+ retail sites, agentic outfit recs with Gemini, SMS pipeline that captures purchase intent in under 2 minutes. 300+ beta users, featured in Business of Fashion.",
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
      "Multilingual AI agent guiding students from inquiry through enrollment. Event-driven WhatsApp pipeline with Twilio, DynamoDB session tracking, Salesforce CRM integration. 30+ universities, 28 countries.",
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
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-[15px] font-medium text-foreground">{job.role}</h3>
              <span className="text-xs text-muted shrink-0">{job.period}</span>
            </div>
            <p className="text-sm text-muted mt-0.5">
              {job.url ? (
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border hover:decoration-foreground hover:text-foreground transition-colors">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </p>
            <p className="text-[15px] text-muted mt-3 leading-relaxed">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
