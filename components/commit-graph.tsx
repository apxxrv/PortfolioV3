"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ContributionDay {
  contributionCount: number
  date: string
}

interface ContributionWeek {
  contributionDays: ContributionDay[]
}

interface ContributionData {
  totalContributions: number
  weeks: ContributionWeek[]
}

function getLevel(count: number): number {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

export function CommitGraph() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(setData)
      .catch(() => setError(true))
  }, [])

  if (error || !data) return null

  return (
    <section className="px-4 py-12 sm:px-8 lg:px-12 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">Activity</h2>
        <p className="text-sm text-muted-foreground mt-2">
          {data.totalContributions.toLocaleString()} contributions in the last year
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-[3px] min-w-max">
          {data.weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.contributionDays.map((day, di) => {
                const level = getLevel(day.contributionCount)
                return (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: (wi * 7 + di) * 0.001 }}
                    className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] border transition-colors duration-200 ${
                      level === 0
                        ? "border-border bg-transparent"
                        : level === 1
                        ? "border-primary/30 bg-primary/20"
                        : level === 2
                        ? "border-primary/50 bg-primary/40"
                        : level === 3
                        ? "border-primary/70 bg-primary/60"
                        : "border-primary bg-primary"
                    }`}
                    title={
                      day.contributionCount > 0
                        ? `${day.contributionCount} contribution${day.contributionCount > 1 ? "s" : ""} on ${day.date}`
                        : `No contributions on ${day.date}`
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-[10px] text-muted-foreground">Less</span>
          <div className="w-[10px] h-[10px] rounded-[2px] border border-border bg-transparent" />
          <div className="w-[10px] h-[10px] rounded-[2px] border border-primary/30 bg-primary/20" />
          <div className="w-[10px] h-[10px] rounded-[2px] border border-primary/50 bg-primary/40" />
          <div className="w-[10px] h-[10px] rounded-[2px] border border-primary/70 bg-primary/60" />
          <div className="w-[10px] h-[10px] rounded-[2px] border border-primary bg-primary" />
          <span className="text-[10px] text-muted-foreground">More</span>
        </div>
      </motion.div>
    </section>
  )
}
