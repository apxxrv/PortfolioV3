"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const projects = [
  {
    title: "STILED AI",
    tags: ["Node.js", "Flask", "Gemini AI", "MediaPipe"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    previewUrl: "https://thestiled.com",
    url: "https://thestiled.com",
    year: "2025",
  },
  {
    title: "iECHO",
    tags: ["React", "AWS Bedrock", "EKS", "Python"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    url: "https://github.com/apxxrv",
    year: "2025",
  },
  {
    title: "Mine Alliance",
    tags: ["Next.js", "Flask", "SageMaker", "Leaflet"],
    image: "/abstract-memory-storage-visualization.jpg",
    url: "https://github.com/apxxrv",
    year: "2024",
  },
  {
    title: "PrepU",
    tags: ["AWS", "Python", "D3.js", "Rekognition"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    url: "https://github.com/apxxrv",
    year: "2023",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — SELECTED WORKS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">The Distortion Gallery</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-foreground/10 py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-foreground/70 transition-colors duration-300 flex-1"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 md:order-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-foreground/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}

        {/* Floating Preview */}
        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            "previewUrl" in projects[hoveredIndex] ? (
              <iframe
                src={(projects[hoveredIndex] as typeof projects[0]).previewUrl}
                title={projects[hoveredIndex].title}
                scrolling="no"
                style={{
                  width: "1280px",
                  height: "800px",
                  transform: "scale(0.25)",
                  transformOrigin: "top left",
                  pointerEvents: "none",
                  border: "none",
                }}
              />
            ) : (
              <motion.img
                src={projects[hoveredIndex].image}
                alt={projects[hoveredIndex].title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ filter: "grayscale(50%) contrast(1.1)" }}
              />
            )
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-foreground/10" />
    </section>
  )
}
