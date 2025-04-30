"use client"

import { MapPin } from "lucide-react"

interface PropertyMapProps {}

export default function PropertyMap() {
  return (
    <section id="local" className="py-16 px-4  scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-text-300">Localização</h2>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3686.0605842275204!2d-47.191379!3d-22.501910000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMwJzA2LjkiUyA0N8KwMTEnMjkuMCJX!5e0!3m2!1sen!2sbr!4v1745938868469!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-text-300/80">Localização aproximada. Entre em contato para detalhes exatos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
