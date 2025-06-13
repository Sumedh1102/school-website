import React from 'react'
import { Star, Crown, Truck } from "lucide-react"


const Main = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-10 m-10">
  <div className="bg-purple-950 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
    {/* Pill-shaped label */}
    <div className="inline-flex items-center px-6 py-2 bg-purple-700/50 rounded-full mb-8">
      <span className="text-white text-sm font-medium"> Highlights</span>
    </div>

    {/* Main heading */}
    <h2 className="text-white font-domine text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16">
      Why Choose Our School?
    </h2>

    {/* Feature cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {/* First Card - Quality Education */}
      <div className="flex flex-col items-start space-y-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
        </div>
        <h3 className="text-white text-2xl font-bold font-domine">Quality Education</h3>
        <p className="text-purple-100 text-base leading-relaxed font-inter">
          Our dedicated faculty ensures every student receives a strong academic foundation paired with critical thinking skills.
        </p>
      </div>

      {/* Second Card - Affordable Learning */}
      <div className="flex flex-col items-start space-y-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Crown className="w-10 h-10 text-yellow-400 fill-yellow-400" />
        </div>
        <h3 className="text-white text-2xl font-bold font-domine">Accessible Learning</h3>
        <p className="text-purple-100 text-base leading-relaxed font-inter">
          We offer quality education at an affordable cost, making academic excellence reachable for all families.
        </p>
      </div>

      {/* Third Card - Safe & Supportive Environment */}
      <div className="flex flex-col items-start space-y-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Truck className="w-10 h-10 text-yellow-400 fill-yellow-400" />
        </div>
        <h3 className="text-white text-2xl font-bold font-domine">Safe & Supportive</h3>
        <p className="text-purple-100 text-base leading-relaxed font-inter">
          We provide a nurturing environment with secure facilities and a focus on holistic development of every student.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Main
