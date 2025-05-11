import { IconBrandInstagram, IconBrandLinkedin, IconBrandFacebook } from '@tabler/icons-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary relative inline-block">
              Agency
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/50"></div>
            </h3>
            <p className="text-gray-400">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Links Rápidos
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/50"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Serviços
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/50"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-400 hover:text-primary transition-colors group flex items-center">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Contato
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/50"></div>
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="group flex items-center">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                contato@agency.com
              </li>
              <li className="group flex items-center">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                (11) 9999-9999
              </li>
              <li className="group flex items-center">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                São Paulo, SP
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors group">
                <IconBrandInstagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors group">
                <IconBrandLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors group">
                <IconBrandFacebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agency. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 