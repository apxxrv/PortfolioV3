import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Apoorv Singh | Software Engineer",
  description: "CS senior at ASU (GPA 3.8) · Founding Engineer shipping GenAI products with Python, C++, AWS, and React.",
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
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="noise-overlay" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
