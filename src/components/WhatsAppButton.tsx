'use client'

import { IconBrandWhatsapp } from '@tabler/icons-react'

export default function WhatsAppButton() {
  const phoneNumber = '5511967297777' // Replace with your actual phone number
  const message = 'Olá! Gostaria de saber mais sobre seus serviços.'
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="cursor-pointer fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp size={32} />
    </button>
  )
} 