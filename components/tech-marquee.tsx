"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "Go", "Kotlin", "Bash", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask", "Django", "TailwindCSS", "Expo"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EKS, Bedrock, Lambda, SageMaker, S3, SQS, ECR)", "GCP", "Docker", "AWS CDK", "GitHub Actions", "Strands SDK", "Twilio"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "DynamoDB", "FAISS", "ChromaDB", "pgvector"],
  },
  {
    label: "AI / ML",
    items: ["LLM orchestration", "RAG pipelines", "MCP", "LangChain", "HuggingFace", "PyTorch", "TensorFlow", "Voyage-3", "GPT-4o", "Bedrock", "Gemini AI", "MediaPipe"],
  },
]

export function TechMarquee() {
  return (
    <section id="skills" className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Skills</h2>
        <p className="text-sm text-muted-foreground mt-2">Technologies I work with</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="space-y-8 max-w-5xl">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <h3 className="text-sm font-medium text-foreground mb-3">{category.label}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
