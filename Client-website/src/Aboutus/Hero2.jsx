import React from 'react'
import { Backpack, GraduationCap } from "lucide-react"

const Hero2 = () => {
  return (
    <>
    <section className='mb-20'>
   <div className="container mx-auto px-4 md:px-6 max-w-7xl py-10">
  {/* Header Section */}
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-8 mb-6">
      <Backpack className="w-16 h-16 text-purple-600 stroke-2" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3b2a14] tracking-tight font-domine">
        Our School's Growing Community
      </h1>
      <GraduationCap className="w-16 h-16 text-purple-600 stroke-2" />
    </div>
    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
      Join our vibrant school family and connect with educators, students, and parents who believe in nurturing
      young minds for a brighter future.
    </p>
  </div>

  {/* Image with Stats Overlay */}
  <div className="relative max-w-5xl mx-auto">
    <img
      src="https://cdn.theatlantic.com/thumbor/wbshgiy6OFEUEFKAEmy4m1e-vMI=/0x173:3500x2142/1952x1098/media/img/mt/2017/06/RTX1H0VR/original.jpg"
      alt="Happy school child engaged in learning"
      width={800}
      height={400}
      className="w-full h-auto rounded-3xl object-cover shadow-lg"
    />
 
    {/* Stats Overlay */}
<div className="absolute bottom-0 left-0 right-0 mx-6 bg-yellow-400 rounded-3xl p-6 md:p-8 shadow-2xl translate-y-16">
  <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-6 md:gap-8">
    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-1">1000+</div>
      <div className="text-sm md:text-base text-gray-800 font-medium">Students Enrolled</div>
    </div>

    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-1">75+</div>
      <div className="text-sm md:text-base text-gray-800 font-medium">Dedicated Teachers</div>
    </div>

    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-1">98%</div>
      <div className="text-sm md:text-base text-gray-800 font-medium">Parent Satisfaction</div>
    </div>

    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-1">30+</div>
      <div className="text-sm md:text-base text-gray-800 font-medium">Extracurricular Activities</div>
    </div>
  </div>
</div>
  </div>
</div>
</section>
    </>
  )
}

export default Hero2
