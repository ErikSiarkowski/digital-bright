import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconCode, IconShoppingCart, IconChartBar, IconSearch, IconDeviceMobile, IconBrandInstagram } from '@tabler/icons-react'

const services = [
  {
    icon: IconCode,
    title: 'Desenvolvimento Web',
    description: 'Criamos websites modernos e responsivos, utilizando as mais recentes tecnologias do mercado.',
    features: [
      'Sites Institucionais',
      'Landing Pages',
      'Aplicações Web',
      'Manutenção e Suporte'
    ]
  },
  {
    icon: IconShoppingCart,
    title: 'E-commerce',
    description: 'Desenvolvemos lojas virtuais completas e otimizadas para maximizar suas vendas online.',
    features: [
      'Plataformas Personalizadas',
      'Integração com Pagamentos',
      'Gestão de Estoque',
      'Relatórios de Vendas'
    ]
  },
  {
    icon: IconChartBar,
    title: 'Marketing Digital',
    description: 'Estratégias completas de marketing digital para aumentar sua presença online.',
    features: [
      'Gestão de Redes Sociais',
      'Email Marketing',
      'Marketing de Conteúdo',
      'Anúncios Pagos'
    ]
  },
  {
    icon: IconSearch,
    title: 'SEO',
    description: 'Otimizamos seu site para os mecanismos de busca, aumentando sua visibilidade orgânica.',
    features: [
      'Otimização On-Page',
      'Link Building',
      'Análise de Keywords',
      'Relatórios de Performance'
    ]
  },
  {
    icon: IconDeviceMobile,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android.',
    features: [
      'UI/UX Design',
      'Desenvolvimento Nativo',
      'Manutenção',
      'Publicação nas Stores'
    ]
  },
  {
    icon: IconBrandInstagram,
    title: 'Social Media',
    description: 'Gerenciamento completo das suas redes sociais para engajar sua audiência.',
    features: [
      'Planejamento de Conteúdo',
      'Gestão de Comunidade',
      'Análise de Métricas',
      'Campanhas Patrocinadas'
    ]
  }
]

export default function Servicos() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-tertiary mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Oferecemos soluções completas em desenvolvimento web e marketing digital 
              para impulsionar seu negócio no mundo digital.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-tertiary mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-tertiary mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato conosco e descubra como podemos ajudar a alcançar seus objetivos.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 