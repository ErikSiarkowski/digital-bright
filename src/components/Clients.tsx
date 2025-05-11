const clients = [
  { name: 'Empresa 1', logo: '/placeholder-logo-1.png' },
  { name: 'Empresa 2', logo: '/placeholder-logo-2.png' },
  { name: 'Empresa 3', logo: '/placeholder-logo-3.png' },
  { name: 'Empresa 4', logo: '/placeholder-logo-4.png' },
  { name: 'Empresa 5', logo: '/placeholder-logo-5.png' },
  { name: 'Empresa 6', logo: '/placeholder-logo-6.png' }
]

const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-tertiary mb-12 relative">
          Empresas que Confiam em Nós
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients 