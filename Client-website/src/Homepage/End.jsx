import React from 'react'
import { Calendar, Crown, Pencil, Sparkles } from "lucide-react"
import img from '../Image/end.png'

const End = () => {
  return (
   <>
 <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-24 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto rounded-3xl lg:rounded-[35px]  shadow-lg flex flex-col md:flex-row h-auto md:h-[300px] bg-[#1f5e1f] ">
        {/* Left - Image */}
        <div className="md:basis-[40%] bg-[#1f5e1f] flex items-center justify-center relative py-8 md:py-0 rounded-full lg:rounded-bl-[35px] ">
          {/* Background SVG Pattern */}
          <svg
            className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] text-green-300 opacity-10"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>

          {/* Second SVG */}
          <svg
            className="absolute top-0 right-0 w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] text-green-300 opacity-10"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>

          {/* Main Image */}
          <div className="relative top-7 w-[800px] lg:w-full h-[150px] sm:h-[250px] md:h-[300px] lg:h-[455px] left-8 lg:left-2">
            <img
              src={img}
              alt="Mom and kid using tablet"
              fill
              className="object-cover md:object-contain transform -translate-y-[200px] md:-translate-y-[50px] lg:-translate-y-[150px] lg:rounded-bl-[40px] z-10"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="md:basis-[60%] relative bg-[#ffd93d] p-4 sm:p-5 md:p-6 flex flex-col justify-center rounded-t-[20px] md:rounded-t-[35px]">
          <span className="bg-[#ffd93d] font-inter border-black border text-gray-800 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full w-fit mb-2 shadow-sm">
            Upcoming Event
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold font-domine text-gray-900 mb-2 leading-snug">
            Building children <br className="hidden sm:block" /> one at a time
          </h2>
          <p className="text-gray-800 mb-3 text-xs sm:text-sm font-inter leading-normal">
            Coolness Flows from the Fountains <br className="hidden sm:block" />
            of Knowledge.
          </p>
          <div className="flex items-center gap-2 text-gray-900">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            <p className="text-xs sm:text-sm font-medium">07 March 2025</p>
          </div>

          {/* Right-side medium image */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <img
              src="https://www.svgrepo.com/show/530161/check-in.svg"
              alt="Decorative"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default End
