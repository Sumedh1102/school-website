import React from 'react'
import { School, Rocket, Sparkles } from "lucide-react"
import img from '../Image/aboutimg.png'

const Hero = () => {
  return (
  <>
   <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-domine text-[#3b2a14] leading-tight">About Our School</h2>
             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-inter font-light max-w-lg">
               Our school is dedicated to nurturing young minds through a balanced blend of academics, creativity, and character-building. We provide a safe, supportive environment where students grow into confident, curious, and responsible individuals, ready to thrive in the world.
             </p>
            </div>

            {/* Right Column - Image with Decorative Elements */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main circular background */}
              <div className="relative">
                {/* Yellow circular background */}
               <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-300 rounded-full flex items-center justify-center relative">
                  <div className="relative w-[85%] h-[85%] rounded-full -translate-y-20 sm:-translate-y-8 md:-translate-y-24">
                    <img
                      src={img}
                      alt="Happy child holding a device"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 380px"
                      priority
                    />
                  </div>
                </div>

                {/* Decorative floating elements */}
                {/* Teal circle with camera icon - top right */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center shadow-lg ">
                <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Purple circle with stars - bottom left */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="relative">
                    <School className="w-6 h-6 text-white fill-white" />
                    <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1" />
                  </div>
                </div>

                {/* Additional small decorative circles */}
                <div className="absolute top-8 -left-8 w-8 h-8 bg-pink-400 rounded-full shadow-md  delay-300"></div>
                <div className="absolute -top-8 left-16 w-6 h-6 bg-orange-400 rounded-full shadow-md delay-500"></div>
                <div className="absolute bottom-16 -right-8 w-10 h-10 bg-green-400 rounded-full shadow-md  delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Hero
