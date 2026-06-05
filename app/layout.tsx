import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Apoorv Singh | Software Engineer",
  description: "CS @ ASU (GPA 3.8) · Founding Engineer shipping GenAI products with Python, TypeScript, AWS, and React. Co-Founder @ Trace.",
  openGraph: {
    title: "Apoorv Singh | Software Engineer",
    description: "Founding Engineer shipping GenAI products across healthcare, e-commerce, and mining. AWS · React · Python.",
    url: "https://apoorv.dev",
    siteName: "Apoorv Singh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorv Singh | Software Engineer",
    description: "Founding Engineer shipping GenAI products across healthcare, e-commerce, and mining. AWS · React · Python.",
    creator: "@apxxrv",
  },
  metadataBase: new URL("https://apoorv.dev"),
}

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistMono.variable} suppressHydrationWarning>
      <body className="font-mono antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
