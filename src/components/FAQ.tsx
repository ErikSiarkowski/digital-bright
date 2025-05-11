'use client'

import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Quais serviços vocês oferecem?',
    answer: 'Oferecemos uma ampla gama de serviços digitais, incluindo desenvolvimento web, marketing digital, SEO, gestão de redes sociais e muito mais.'
  },
  {
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Sites institucionais simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 3 meses.'
  },
  {
    question: 'Vocês oferecem suporte após o lançamento?',
    answer: 'Sim, oferecemos suporte contínuo após o lançamento do projeto, incluindo manutenção, atualizações e assistência técnica.'
  },
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'O processo começa com uma reunião inicial para entender suas necessidades, seguida por uma proposta detalhada. Após a aprovação, iniciamos o desenvolvimento com entregas em etapas.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-tertiary mb-12 relative">
          Perguntas Frequentes
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0 group"
            >
              <button
                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all rounded-lg px-4 group-hover:border-l-4 group-hover:border-primary"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-tertiary group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <IconChevronDown
                  className={`w-6 h-6 text-primary transition-all ${
                    openIndex === index ? 'rotate-180' : ''
                  } group-hover:scale-110`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-600 px-4 bg-gray-50 rounded-b-lg border-l-4 border-primary">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 