"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PageLoader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("loaded")) return
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem("loaded", "1")
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center gap-6 pointer-events-none"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <p className="font-sans text-3xl md:text-5xl font-light tracking-[0.15em] text-white">
              APOORV <span className="italic">SINGH</span>
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-40 h-px bg-white/10 overflow-hidden rounded-full"
          >
            <motion.div
              className="h-full bg-[#2563eb]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase"
          >
            Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
