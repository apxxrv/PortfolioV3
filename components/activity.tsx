"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Section } from "./section"

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

const levelClasses = [
  "border-border bg-transparent",
  "border-primary/30 bg-primary/20",
  "border-primary/50 bg-primary/40",
  "border-primary/70 bg-primary/60",
  "border-primary bg-primary",
]

export function Activity() {
  const [data, setData] = useState<ContributionData | null>(null)

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.ok ? res.json() : null)
      .then(setData)
      .catch(() => {})
  }, [])

  if (!data) return null

  return (
    <Section id="activity" title="Activity" subtitle={`${data.totalContributions.toLocaleString()} contributions in the last year`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        <div className="flex gap-[3px] min-w-max">
          {data.weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.contributionDays.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  className={`w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-sm border ${levelClasses[getLevel(day.contributionCount)]}`}
                  title={day.contributionCount > 0 ? `${day.contributionCount} on ${day.date}` : `No contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-[10px] text-muted">Less</span>
          {levelClasses.map((cls, i) => (
            <div key={i} className={`w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-sm border ${cls}`} />
          ))}
          <span className="text-[10px] text-muted">More</span>
        </div>
      </motion.div>
    </Section>
  )
}
