import React from 'react'
import { Check } from "lucide-react"
import img from '../Image/Faculty.png'

const Main = () => {
  return (
    <>
    <section className="w-full py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3b2a14] font-domine leading-tight">
                <span className="border-y-2 p-1 bg-clip-text bg-[#f47c45] font-thin text-transparent">
                  Inspiring Journey
                </span>
                <br />
                <span className="text-[#3b2a14]">Of BrightMind's Growth</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-700 text-lg leading-relaxed font-inter font-semibold">
              BrightMind started with a vision to make learning accessible and impactful. Our expert-led courses empower
              individuals to gain skills, grow careers, and achieve success.
            </p>

            {/* Bullet Points List */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#9b713a] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg font-inter">Expert-led, practical courses for all skill levels.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#9b713a] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg font-inter">Flexible learning anytime, anywhere.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#9b713a] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg font-inter">Join a community of passionate learners.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#9b713a] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg font-inter">Career-focused skills for real-world success.</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="order-first lg:order-last">
            <div className="relative h-full min-h-[600px] lg:min-h-[700px]">
              <img
                src={img}
                alt="Woman and child using computer together"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Main
