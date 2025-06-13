import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Image } from "lucide-react"

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Create multiple sets of gallery items for infinite scroll effect
  const galleryItems = [
  { id: 1, src: "https://i.pinimg.com/736x/0d/fb/e3/0dfbe3880d70c139101564226f8008cb.jpg" },
  { id: 2, src: "https://i.pinimg.com/736x/29/c3/59/29c3591a885beb165971d4ccce057125.jpg" },
  { id: 3, src: "https://i.pinimg.com/736x/ca/76/ad/ca76adbbee75c2668008391cc66bf9f3.jpg" },
  { id: 4, src: "https://i.pinimg.com/736x/ab/d8/54/abd85451500b3ddaa5fbf0267c29d5af.jpg" },
  { id: 5, src: "https://i.pinimg.com/736x/1e/ea/e8/1eeae8fc3396ee513dc233fd416e07d3.jpg" },
  { id: 6, src: "https://i.pinimg.com/736x/2a/0d/20/2a0d206101dda312a5e3cdd6562aa139.jpg" },
  { id: 7, src: "https://i.pinimg.com/736x/2c/4d/8e/2c4d8e3176fadf2f5d342a77d330740f.jpg" },
  { id: 8, src: "https://i.pinimg.com/736x/ec/fb/c1/ecfbc1599a09edd2a694a154ca903e69.jpg" },
]

  const itemsPerView = 4
  const totalSlides = galleryItems.length - itemsPerView + 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full max-w-7xl mx-auto my-10 py-12 bg-[#EAE4D5] min-h-screen">
      {/* Header Section */}
      <div className={`mb-12 transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-3">Our School's Vibrant Community Gallery</h1>
        <p className="text-slate-500 text-lg">Celebrating achievements and showcasing creativity</p>
      </div>

      {/* Gallery Carousel Container */}
      <div className={`relative overflow-hidden mb-8 transition-all duration-800 ease-out delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sliding Gallery */}
        <div
          className="flex gap-1 transition-transform duration-1000 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(galleryItems.length / itemsPerView) * 100}%`,
          }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{
                width: `${100 / galleryItems.length}%`,
                transitionDelay: `${100 * (index % itemsPerView)}ms`,
              }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center  mx-1  duration-300 rounded-lg ">
                <img
                   src={item.src}
                   alt={`Gallery image ${item.id}`}
                   className="w-full h-full object-cover rounded-lg"
                    />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for Smooth Edge Effect */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-[#EAE4D5] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-[#EAE4D5] to-transparent pointer-events-none z-10" />
      </div>

      {/* Navigation Controls */}
      <div className={`flex items-center justify-between transition-all duration-600 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Pagination Dots */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} ${
                currentIndex === index ? "bg-slate-600 scale-110" : "bg-slate-300 hover:bg-slate-400"
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

    
     
    </div>
  )
}