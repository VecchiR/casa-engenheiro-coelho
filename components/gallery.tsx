"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryProps {
  images: string[]
  videoTourUrl?: string
}

export default function Gallery({ images, videoTourUrl }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const placeholderImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero4.jpg"
  ]

  const displayImages = images.length > 0 ? images : placeholderImages

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="galeria" className="py-16 px-4  scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-text-300">Galeria de Fotos</h2>

        <div className="relative h-[300px] md:h-[500px] mb-4 group">
          <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={displayImages[currentIndex] || "/placeholder.svg"}
              alt={`Imagem ${currentIndex + 1} do imóvel`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => openModal(currentIndex)}
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full opacity-70 group-hover:opacity-100"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full opacity-70 group-hover:opacity-100"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* {videoTourUrl && (
            <Button
              className="absolute bottom-4 right-4 bg-accent hover:bg-accent/90 text-black"
              onClick={() => window.open(videoTourUrl, "_blank")}
            >
              <Play className="mr-2 h-4 w-4" />
              Tour Virtual 360°
            </Button>
          )} */}
        </div>

        <div className="flex justify-center space-x-2 overflow-x-auto py-2">
          {displayImages.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                slideIndex === currentIndex ? "bg-primary w-4" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={displayImages[currentIndex]}
              alt={`Imagem ${currentIndex + 1} do imóvel`}
              fill
              className="object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
