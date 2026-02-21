import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Statistics } from "@/components/statistics"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Homepage - Modern Website",
  description: "A modern, responsive homepage built with Next.js and shadcn/ui",
}

export default function WebsitePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
