import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconUsers, IconTarget, IconAward, IconHeartHandshake } from '@tabler/icons-react'

export default function Sobre() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-tertiary mb-6">
              Sobre Nossa Agência
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Somos uma agência apaixonada por transformar ideias em realidade digital, 
              combinando criatividade com tecnologia para impulsionar o sucesso dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-tertiary mb-12 relative">
            Nossos Valores
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconUsers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-2">Trabalho em Equipe</h3>
              <p className="text-gray-600">
                Acreditamos que o melhor trabalho é feito em conjunto, valorizando a diversidade e a colaboração.
              </p>
            </div>

            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconTarget className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-2">Foco em Resultados</h3>
              <p className="text-gray-600">
                Nosso objetivo é sempre entregar resultados mensuráveis que impactem positivamente o negócio.
              </p>
            </div>

            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconAward className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-2">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a excelência em tudo o que fazemos, desde o atendimento até a entrega final.
              </p>
            </div>

            <div className="p-6 rounded-lg hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconHeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-tertiary mb-2">Parceria</h3>
              <p className="text-gray-600">
                Construímos relacionamentos duradouros baseados em confiança e transparência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-tertiary mb-12 relative">
              Nossa História
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Fundada em 2024, nossa agência nasceu da paixão por criar soluções digitais inovadoras 
                que realmente fazem a diferença para os negócios dos nossos clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Ao longo dos anos, crescemos e evoluímos, mas mantivemos nosso compromisso com a 
                qualidade e a satisfação dos clientes. Hoje, somos uma equipe diversificada de 
                profissionais talentosos, cada um trazendo sua expertise única para cada projeto.
              </p>
              <p className="text-gray-600">
                Nossa missão é continuar ajudando empresas a alcançarem seu potencial máximo no 
                mundo digital, através de estratégias personalizadas e soluções tecnológicas 
                de ponta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 