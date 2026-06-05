"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Trace",
    role: "Co-Founder & Research Engineer",
    tags: ["GPT-4o", "pgvector", "Voyage-3", "Supabase"],
    url: "https://trace-ai.co",
    description: "Intent-aware memory layer for Claude Code & Codex — eliminates the 20% of every session lost to context re-establishment. 100% accuracy lift, 52% token reduction, 24% latency reduction vs cold sessions.",
    highlights: ["Won VillageHacks '26", "DevLabs Momentum Cohort", "15 developers onboarded week 1"],
  },
  {
    title: "STILED AI",
    role: "Founding Software Engineer",
    tags: ["React", "FastAPI", "Gemini 2.5", "GCP"],
    url: "https://thestiled.com",
    description: "AI virtual try-on Chrome extension across 10+ retail platforms. Agentic outfit recommendations with image generation, async iMessage/SMS pipeline for purchase capture.",
    highlights: ["300+ beta users", "Featured in Business of Fashion", "89% found suggestions useful"],
  },
  {
    title: "iECHO RAG Chatbot",
    role: "Cloud & Frontend Developer",
    tags: ["Bedrock", "EKS Fargate", "Strands SDK", "React"],
    url: "https://smartchallenges.asu.edu/challenges/knowledge-access-chatbot-project-echo",
    description: "RAG chatbot for Project ECHO — a global NGO moving expert medical knowledge to frontline workers. Full ingestion pipeline with Bedrock vector storage in preview.",
    highlights: ["250K+ healthcare workers", "38 countries", "90% answer accuracy"],
  },
  {
    title: "Cintana AI Agent",
    role: "Cloud Developer",
    tags: ["AgentCore", "Claude Sonnet", "Twilio", "AWS CDK"],
    url: "https://smartchallenges.asu.edu/challenges/multilingual-admissions-agent-cintana-education",
    description: "Multilingual agentic AI for Cintana Education — guiding students from inquiry through enrollment with event-driven WhatsApp pipeline and Salesforce CRM integration.",
    highlights: ["30+ universities", "28 countries", "Extensible tool architecture"],
  },
  {
    title: "Mine Alliance",
    role: "Sparks Challenge Winner",
    tags: ["SageMaker", "Next.js", "Flask", "Leaflet"],
    url: "https://github.com/apxxrv",
    description: "AI geospatial platform for Arizona's mining industry — trained and deployed geologically intelligent model with interactive map visualizations.",
    highlights: ["Won statewide competition", "AWS SageMaker deployment"],
  },
]

export function Works() {
  return (
    <section id="projects" className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Projects</h2>
        <p className="text-sm text-muted-foreground mt-2">Selected work I&apos;ve shipped</p>
      </motion.div>

      {/* Project Cards Grid */}
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
              <iframe
                src={project.url}
                title={project.title}
                scrolling="no"
                className="w-[1280px] h-[800px] border-none pointer-events-none"
                style={{
                  transform: "scale(0.25)",
                  transformOrigin: "top left",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/60" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-7 h-7 rounded-full bg-foreground/90 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-background" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 lg:p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base lg:text-lg font-medium text-card-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{project.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wide px-2 py-0.5 rounded-md bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 pt-3 border-t border-border">
                {project.highlights.map((h) => (
                  <span key={h} className="text-[10px] text-muted-foreground">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
