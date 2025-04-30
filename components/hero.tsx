"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {Prata } from "next/font/google"
import Veryynicebutton from "./veryynicebutton"

const prata = Prata({ weight: ["400"], subsets: ["latin"] });


interface HeroProps {
  title: string
  tagline: string
  whatsapp: string
}

export default function Hero({ title, tagline, whatsapp }: HeroProps) {
  const formattedWhatsapp = whatsapp.replace(/\D/g, "")

  return (
    <section className="pt-44 pb-32 px-4">
      <div className="flex items-center container mx-auto max-w-8xl justify-evenly">
        <div className="flex flex-col gap-6 items-start max-w-xl">
          <h1 className={`tracking-tight text-8xl/[90%] font-normal mb-4 text-primary`}>{title}</h1>
          <p className="text-xl md:text-lg mb-8 text-text-200">{tagline}</p>
          {/* <Button
            size="lg"
            className="bg-primary hover:bg-accent/90 text-white font-medium"
            onClick={() => window.open(`https://wa.me/${formattedWhatsapp}`, "_blank")}
          >
            <MessageCircle className="h-5 w-5" />
            Chamar no WhatsApp
          </Button> */}
          <Veryynicebutton text={"Chamar no WhatsApp"} hasIcon={true} invert={false}/>
        </div>
      <Image alt="" src={'/hero4.jpeg'} width={500} height={400} className="rounded-xl shadow-xl"/>
      </div>

    </section>
  )
}
