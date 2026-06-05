import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Stack } from "@/components/stack"
import { Activity } from "@/components/activity"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 md:px-10">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Activity />
        <Contact />
      </main>
    </>
  )
}
