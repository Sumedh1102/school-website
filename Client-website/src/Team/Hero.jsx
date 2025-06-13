import React from 'react'
import img from '../Image/Facultyhome.jpg'
import CountUp from 'react-countup'

const Hero = () => {
  return (
  <>
   <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-domine font-bold">
          <span className="text-[#3b2a14]">About </span>
          <span className="text-orange-600 font-thin">BrightMind</span>
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto font-inter font-semibold text-gray-800">
          BrightMind empowers learners with expert-led courses to grow skills, advance careers, and achieve success.
        </p>
      </div>

      <div className="mb-16">
      <div className="rounded-2xl overflow-hidden relative w-full">
        <img
          src={img}
          alt="Student taking an online course"
          width={1200}
          height={550}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-[#3b2a14] font-domine"><CountUp start={0} end={10000}>
            </CountUp>+
          </h2>
          <p className="mt-2 text-gray-800 font-inter font-semibold">Students Enrolled</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-[#3b2a14] font-domine">
            <CountUp start={0} end={50}>
            </CountUp>+
          </h2>
          <p className="mt-2 text-gray-800 font-inter font-semibold">Five-star reviews</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-[#3b2a14] font-domine"> <CountUp start={0} end={67000}>
            </CountUp>+</h2>
          <p className="mt-2 text-gray-800 font-inter font-semibold">Students community</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-[#3b2a14] font-domine"><CountUp start={0} end={67000}>
            </CountUp>+</h2>
          <p className="mt-2 text-gray-800 font-inter font-semibold">Job placement</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero
