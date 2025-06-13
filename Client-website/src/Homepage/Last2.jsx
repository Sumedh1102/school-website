import React from 'react'
import { ArrowRight, Check, Sun, Heart } from "lucide-react"
import img from '../Image/last2.png'

const Last2 = () => {
  return (
    <>
  <div className=" bg-[#f5f2eb] p-4 md:p-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="mb-2">
          {/* Replace this Badge usage */}
          <span className="inline-block bg-[#f5f2eb] text-gray-700  border-slate-400 border rounded-full px-4 py-2 text-sm font-inter font-light">
            Admission on going
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-domine text-amber-900 leading-tight">
                Empower your kids to think be <span className='text-amber-700'>smarter and sharper</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-md font-inter">
                Encourage kids to think critically, be creative, and solve problems for a better future.
              </p>
            </div>

            {/* Replace this Button usage 
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 text-base rounded-full flex items-center transition-colors">
              Get Educated
              <ArrowRight className="ml-2 h-5 w-5" />
            </button> */}

            {/* Curved Arrow - positioned absolutely for better control */}
            <div className="hidden lg:block relative">
              <svg className="absolute bottom-64 left-[600px] w-32 h-16 text-amber-800" viewBox="0 0 120 20" fill="none">
                <path
                  d="M10 50 Q60 10 110 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative">
            {/* Heart Icon */}
            <div className="absolute top-4 right-12 z-10">
              <div className="bg-orange-400 p-3 rounded-full shadow-lg">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
            </div>

            {/* Student Image */}
            <div>
              <div className="relative bg-blue-400  mx-auto rounded-full" style={{ width: "400px", height: "400px" }}>
                <img
                  src={img}
                  alt="Smiling student holding books"
                  width={400}
                  height={400}
                  className="w-[300px] h-[400px] top-[-50px] right-12 absolute "
                />
              </div>
            </div>

            {/* Statistics */}
                        <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-2xl p-6 shadow-lg z-20">
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">45M+</div>
                    <div className="text-sm text-gray-600">Genius kids watched across the globe</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Sun className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">164+</div>
                    <div className="text-sm text-gray-600">Nations participating in the Olympiad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Last2
