import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'
import Header from "@/components/Header"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Bright - Agência de Marketing e Desenvolvimento Web",
  description: "Soluções completas em marketing digital e desenvolvimento web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  )
} 