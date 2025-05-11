import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'

const projects = [
  {
    title: 'E-commerce de Moda',
    description: 'Plataforma completa de e-commerce com sistema de pagamento integrado e gestão de estoque.',
    image: '/placeholder-1.jpg',
    category: 'E-commerce'
  },
  {
    title: 'Site Institucional',
    description: 'Website moderno para empresa de tecnologia com foco em conversão.',
    image: '/placeholder-2.jpg',
    category: 'Website'
  },
  {
    title: 'Landing Page',
    description: 'Landing page otimizada para campanha de lançamento de produto.',
    image: '/placeholder-3.jpg',
    category: 'Marketing'
  }
]

const Portfolio = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tertiary mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e veja como podemos ajudar a transformar sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Imagem do Projeto
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-tertiary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Ver Projeto
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio 