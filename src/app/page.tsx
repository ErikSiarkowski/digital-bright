import Header from '@/components/Header'
import FAQ from '@/components/FAQ'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-tertiary mb-6">
              Transforme sua presença digital
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvemos soluções completas em marketing digital e desenvolvimento web para impulsionar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Comece Agora
                <IconArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/servicos" className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                Conheça Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      {/* <Clients /> */}
      <FAQ />
      <Footer />
    </main>
  )
} 