import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { Experience } from "@/components/experience"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <Experience />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
