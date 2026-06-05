"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-medium text-foreground">
          Say hi
        </h2>
        <p className="text-sm md:text-[15px] text-muted-foreground mt-3 leading-relaxed">
          Always down to talk about AI, startups, or whatever you&apos;re building.
        </p>

        <motion.a
          href="mailto:asing512@asu.edu"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 mt-6 text-sm md:text-[15px] text-primary hover:opacity-80 transition-colors duration-200 group"
        >
          asing512@asu.edu
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.a>
      </motion.div>

      <div className="mt-12 md:mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/apoorv16" },
            { label: "GitHub", href: "https://github.com/apxxrv" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">© {new Date().getFullYear()} Apoorv Singh</p>
      </div>
    </footer>
  )
}
