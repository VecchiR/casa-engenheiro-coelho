"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  price: string
  paymentInfo: string
  whatsapp: string
}

export default function Footer({ price, paymentInfo, whatsapp }: FooterProps) {
  const formattedWhatsapp = whatsapp.replace(/\D/g, "")

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className=" flex col justify-stretch container mx-auto max-w-6xl">
          <div className="self-center flex gap-4 flex-col items-center mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-4xl font-bold">{price}</h3>
            <p className="text-white/80 text-2xl font-normal">{paymentInfo}</p>
          </div>
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
