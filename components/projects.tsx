"use client"

import { motion } from "motion/react"
import { Section } from "./section"

const projects = [
  {
    title: "Trace",
    tech: "GPT-4o · pgvector · Voyage-3 · Supabase",
    url: "https://trace-ai.co",
    description: "Intent-aware memory layer for Claude Code & Codex. Eliminates the 20% of every session lost to context re-establishment.",
    note: "Won VillageHacks '26 · DevLabs Momentum Cohort",
  },
  {
    title: "STILED AI",
    tech: "React · FastAPI · Gemini 2.5 · GCP",
    url: "https://thestiled.com",
    description: "AI virtual try-on Chrome extension across 10+ retail platforms. Try on clothes without leaving the tab.",
    note: "300+ beta users · Featured in Business of Fashion",
  },
  {
    title: "iECHO RAG Chatbot",
    tech: "Bedrock · EKS Fargate · Strands SDK · React",
    url: "https://smartchallenges.asu.edu/challenges/knowledge-access-chatbot-project-echo",
    description: "RAG chatbot for Project ECHO — moving expert medical knowledge to frontline workers in 38 countries.",
    note: "250K+ healthcare workers served",
  },
  {
    title: "Cintana AI Agent",
    tech: "AgentCore · Claude Sonnet · Twilio · AWS CDK",
    url: "https://smartchallenges.asu.edu/challenges/multilingual-admissions-agent-cintana-education",
    description: "Multilingual agentic AI guiding students from inquiry through enrollment via WhatsApp.",
    note: "30+ universities · 28 countries",
  },
  {
    title: "Mine Alliance",
    tech: "SageMaker · Next.js · Flask · Leaflet",
    url: "https://github.com/apxxrv",
    description: "AI geospatial platform for Arizona's mining industry. Geologically intelligent model with interactive maps.",
    note: "Won statewide Sparks competition",
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built and shipped">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group block p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors active:scale-[0.98]"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[15px] font-medium text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <svg className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
            <p className="text-[11px] text-muted mt-1">{project.tech}</p>
            <p className="text-sm text-muted mt-3 leading-relaxed">{project.description}</p>
            {project.note && (
              <p className="text-[11px] text-muted mt-3 pt-3 border-t border-border">{project.note}</p>
            )}
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
