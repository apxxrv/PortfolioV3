"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Trace",
    subtitle: "GPT-4o, pgvector, Voyage-3, Supabase",
    url: "https://trace-ai.co",
    description:
      "Intent-aware memory layer for Claude Code & Codex. Eliminates the 20% of every session lost to context re-establishment.",
    note: "Won VillageHacks '26 · DevLabs Momentum Cohort",
  },
  {
    title: "STILED AI",
    subtitle: "React, FastAPI, Gemini 2.5, GCP",
    url: "https://thestiled.com",
    description:
      "AI virtual try-on Chrome extension that works across 10+ retail platforms. Try on clothes without leaving the tab.",
    note: "300+ beta users · Featured in Business of Fashion",
  },
  {
    title: "iECHO RAG Chatbot",
    subtitle: "Bedrock, EKS Fargate, Strands SDK, React",
    url: "https://smartchallenges.asu.edu/challenges/knowledge-access-chatbot-project-echo",
    description:
      "RAG chatbot for Project ECHO — moving expert medical knowledge to frontline workers in 38 countries.",
    note: "250K+ healthcare workers served",
  },
  {
    title: "Cintana AI Agent",
    subtitle: "AgentCore, Claude Sonnet, Twilio, AWS CDK",
    url: "https://smartchallenges.asu.edu/challenges/multilingual-admissions-agent-cintana-education",
    description:
      "Multilingual agentic AI guiding students from inquiry through enrollment via WhatsApp.",
    note: "30+ universities · 28 countries",
  },
  {
    title: "Mine Alliance",
    subtitle: "SageMaker, Next.js, Flask, Leaflet",
    url: "https://github.com/apxxrv",
    description:
      "AI geospatial platform for Arizona's mining industry. Trained and deployed a geologically intelligent model with interactive maps.",
    note: "Won statewide Sparks competition",
  },
]

export function Works() {
  return (
    <section id="projects" className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Projects</h2>
        <p className="text-sm text-muted-foreground mt-2">Things I&apos;ve built and shipped</p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            {/* Iframe Preview */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-muted">
              <div className="absolute inset-0 origin-top-left scale-[0.3] w-[333.33%] h-[333.33%]">
                <iframe
                  src={project.url}
                  title={project.title}
                  scrolling="no"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className="w-full h-full border-none pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/60" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-lg font-medium text-card-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {project.description}
              </p>
              {project.note && (
                <p className="text-[11px] text-muted-foreground mt-4 pt-3 border-t border-border">
                  {project.note}
                </p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
