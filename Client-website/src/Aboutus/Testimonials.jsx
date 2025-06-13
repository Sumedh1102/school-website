import React from 'react'
import { Star } from "lucide-react"


const Testimonials = () => {

    const testimonials = [
    {
      title: "A Wonderful Shopping Experience!",
      text: "Babuu made shopping for my newborn so easy and stress-free! The clothes are soft, adorable, and high-quality, and the shipping was super fast. I'll be coming back for all my baby's needs!",
      name: "Adam Miller",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Reliable & Safe Products",
      text: "I love how Babuu carefully selects products that are both safe and stylish. As a new parent, it's so reassuring to know I can trust their recommendations for my baby!",
      name: "James Trut",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "My Go-To Baby Store!",
      text: "From baby clothes to toys and nursery items, Babuu has everything I need. The customer service is amazing, and I love the eco-friendly options they offer. Highly recommend!",
      name: "Markus Fuller",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "A Life-Saver for Busy Parents!",
      text: "As a working mom, I don't have a lot of time to shop around. Babuu has everything I need in one place, and the customer service is fantastic! I love that they have fast shipping and quality products that I can trust.",
      name: "Mary Jonson",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
   <>
   <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Testimonials Label */}
      <div className="flex justify-left mb-6">
        <span className="inline-flex item-left px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          Testimonials
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#3b2a14] font-domine text-left mb-16">What our people say</h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-purple-50 rounded-2xl p-8 space-y-6 hover:shadow-lg hover:border border-purple-800">
            {/* Testimonial Title */}
            <h3 className="text-xl font-bold font-domine text-gray-900">"{testimonial.title}"</h3>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed font-inter">"{testimonial.text}"</p>

            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              {/* Name and Rating */}
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">{testimonial.name}</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   </>
  )
}

export default Testimonials
