import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans, Prata } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa em Engenheiro Coelho",
  description: "Pensando em sair do aluguel?"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth tracking-tight text-lg" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
