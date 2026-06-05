import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 lg:ml-64 w-full min-w-0">
        <Hero />
        <Experience />
        <Works />
        <TechMarquee />
        <Footer />
      </main>
    </div>
  )
}
