import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const font = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apoorv Singh",
  description: "I build AI products and ship them to real people.",
  openGraph: {
    title: "Apoorv Singh",
    description: "I build AI products and ship them to real people.",
    url: "https://apoorv.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@apxxrv",
  },
  metadataBase: new URL("https://apoorv.dev"),
}

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
