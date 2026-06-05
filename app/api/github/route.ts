import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 500 })
  }

  const query = `
    query {
      user(login: "apxxrv") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return NextResponse.json({ error: "GitHub API error" }, { status: res.status })
  }

  const json = await res.json()
  const calendar = json.data.user.contributionsCollection.contributionCalendar

  return NextResponse.json({
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks,
  })
}
