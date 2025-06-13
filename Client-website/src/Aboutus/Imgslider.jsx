import React from 'react'
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"


const galleryImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/c9/64/da/c964daea458e58412dba9c44bf360433.jpg",
    alt: "Parent and child playing together",
    title: "Playtime Memories",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/bb/4d/84/bb4d84a1ff967257fc556accdaf41624.jpg",
    alt: "Father and child in yellow shirts",
    title: "Matching Moments",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/4c/28/4f/4c284f33dd23d380b20741efda350d79.jpg",
    alt: "Children playing with building blocks",
    title: "Creative Play",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/80/5a/26/805a26659964024a90a4f3c70e8ef28b.jpg",
    alt: "Baby's first steps",
    title: "First Steps",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/64/56/65/645665c8ba527efc70d0b290c18b83cf.jpg",
    alt: "Family reading together",
    title: "Story Time",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/6a/4d/12/6a4d1295d4469a18f0f7757d66a2bf02.jpg",
    alt: "Baby laughing",
    title: "Pure Joy",
  },
]

const Imgslider = () => {
     const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const visibleImages = 3
  const maxIndex = galleryImages.length - visibleImages

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const openLightbox = (index) => {
    setSelectedImage(currentIndex + index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }
  return (
   <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <section className="mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3b2a14] font-domine mb-6 leading-tight animate-fade-in">
            We believe every small moment with your baby is worth celebrating.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl animate-fade-in-delay">
            That's why we're not just about products - we're about making memories.
          </p>
        </div>

        <div className="flex items-center justify-between mt-12">
          <button
            className="bg-[#6c4ed9] text-white px-8 py-3 rounded-full hover:bg-[#5b3dc7] transition-all duration-300 hover:scale-105 hover:shadow-lg font-inter"
            onClick={() => setSelectedImage(0)}
          >
            View all gallery
          </button>

          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="bg-[#ffd966] p-3 rounded-full hover:bg-[#ffcf33] transition-all duration-300 hover:scale-110 hover:shadow-md disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="bg-[#ffd966] p-3 rounded-full hover:bg-[#ffcf33] transition-all duration-300 hover:scale-110 hover:shadow-md disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-1/3 relative group cursor-pointer"
              onClick={() => openLightbox(index - currentIndex)}
            >
              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={600}
                  className="w-[800px] h-[400px] md:h-[325px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">{image.title}</p>
                    <p className="text-sm">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={galleryImages[selectedImage]?.src || ""}
              alt={galleryImages[selectedImage]?.alt || ""}
              width={800}
              height={1200}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{galleryImages[selectedImage]?.title}</h3>
              <p className="text-gray-300 text-sm mt-2">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>

            {/* Lightbox Navigation */}
            <button
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  
  )
}

export default Imgslider
