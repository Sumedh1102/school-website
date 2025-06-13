import React from 'react'
import { Users, DollarSign, Monitor, Lightbulb } from "lucide-react"

const Hero2 = () => {
  return (
   <>
    <div className=" bg-[#f5f2eb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-domine font-bold mb-16">
          <span className="text-[#3b2a14]">Our Core </span>
          <span className="text-[#9b713a] font-thin">Values</span>
        </h1>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Community First Card */}
          <div className="bg-purple-200 rounded-2xl p-8">
            <div className="mb-6">
              <Users className="w-12 h-24 text-purple-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 font-inter">Community First</h3>
            <p className="text-gray-700 font-">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* Cost-Effectiveness Card */}
          <div className="bg-red-100 rounded-2xl p-8">
            <div className="mb-6">
              <DollarSign className="w-12 h-24 text-red-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 font-inter">Cost-Effectiveness</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* Course Accessibility Card */}
          <div className="bg-teal-100 rounded-2xl p-8">
            <div className="mb-6">
              <Monitor className="w-12 h-24 text-teal-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 font-inter">Course Accessibility</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* Personalized Learning Card */}
          <div className="bg-yellow-100 rounded-2xl p-8">
            <div className="mb-6">
              <Lightbulb className="w-12 h-24 text-yellow-900" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 font-inter">Personalized Learning</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Hero2
