"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Founding Software Engineer",
    company: "STILED AI",
    url: "https://thestiled.com",
    period: "Dec 2024 — Present",
    location: "Remote",
    current: true,
    highlights: [
      "Full-stack virtual try-on platform: React.js/TypeScript frontend, Node.js/FastAPI backend, Chrome extension on GCP with Supabase and CI/CD via GitHub Actions",
      "Integrated Gemini Flash 2.5 for agentic outfit recommendations with image generation; automated scrapers across 10+ retail sites; reduced AI inference latency 40s → 3s",
      "Architected async Sendblue iMessage/SMS pipeline (11 intent flows, 7-state conversation engine) capturing purchase decisions within the 2-minute styling intent window",
      "Validated with 300+ beta users: 89% found suggestions useful, 92.5% would use while shopping; featured in Business of Fashion",
    ],
  },
  {
    role: "Cloud & Frontend Developer",
    company: "ASU CIC × AWS — iECHO RAG Chatbot",
    url: "https://smartchallenges.asu.edu/challenges/knowledge-access-chatbot-project-echo",
    period: "May — Aug 2025",
    location: "Tempe, AZ",
    current: true,
    highlights: [
      "Led 3-person team building RAG chatbot for Project ECHO on EKS Fargate + API Gateway with Strands SDK, serving 250K+ healthcare workers across 38 countries",
      "Among first teams to implement AWS Bedrock vector storage in preview; full pipeline: Python crawlers → S3 Lambda → Bedrock Data Automation → Titan Multimodal Embeddings",
      "Sole developer of React/TypeScript frontend with Shadcn/UI; real-time streaming, citation rendering, offline-optimized mobile UX; 90% answer accuracy via Bedrock Nova Lite",
    ],
  },
  {
    role: "Cloud Developer",
    company: "ASU CIC × AWS — Admissions AI Agent",
    url: "https://smartchallenges.asu.edu/challenges/multilingual-admissions-agent-cintana-education",
    period: "Sep — Nov 2025",
    location: "Tempe, AZ",
    current: false,
    highlights: [
      "Architected multilingual agentic AI on Bedrock AgentCore for Cintana Education (30+ universities, 28 countries) orchestrating Claude Sonnet; Docker + ECR, AWS CDK infra",
      "Event-driven WhatsApp pipeline (SQS → Lambda → Twilio) with DynamoDB session tracking; Salesforce CRM integration and AWS Translate for multilingual RAG",
      "Designed extensible tool architecture enabling new agent capabilities without modifying core logic; RAG over Bedrock Knowledge Bases with cited, culturally responsive answers",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "AGCO Corporation",
    period: "May — Sep 2024",
    location: "Duluth, GA",
    current: false,
    highlights: [
      "Upgraded Salesforce REST APIs to v60.0 and refactored 600+ Apex classes, reducing CRM technical debt across cross-functional engineering teams",
      "Authored system scalability and integration documentation adopted by engineering teams for future enhancements",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Experience</h2>
        <p className="text-sm text-muted-foreground mt-2">Where I&apos;ve built and shipped</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-2 top-3 bottom-3 w-px bg-border hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative sm:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 hidden sm:block">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    exp.current
                      ? "border-foreground bg-foreground"
                      : "border-border bg-background"
                  }`}
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base lg:text-lg font-medium text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200 underline decoration-border hover:decoration-foreground">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                  {" · "}{exp.location}
                </p>

                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-border mt-1.5 shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
