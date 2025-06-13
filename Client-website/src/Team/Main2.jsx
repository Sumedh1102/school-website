import React from 'react'
import { CheckCircle } from "lucide-react"
import img from '../Image/Pro.png'

const Main2 = () => {
  return (
    <>
    <div className="bg-[#f5f2eb] py-16 px-4 md:px-8 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
    
    {/* Left side - Image */}
    <div className="w-full md:w-1/2">
      <div className="relative h-[500px] md:h-full">
        <img
          src={img}
          alt="Woman using laptop"
          width={600}
          height={800}
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Right side - Content with Rocket */}
    <div className="w-full md:w-1/2 space-y-10 relative">
      <h2 className="font-domine text-[#3b2a14] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Why Choose BrightMind{" "}
        <span className="bg-[#f47c45] bg-clip-text text-transparent">
          Training ?
        </span>
      </h2>

      <p className="text-gray-700 max-w-xl font-semibold text-base font-inter">
        Our flexible learning approach, practical lessons, and industry-relevant content empower you to gain skills,
        grow your career, and achieve your goals. Join thousands of learners who trust BrightMind for their
        professional growth!
      </p>

      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <span className="text-purple-500">
            <CheckCircle size={24} className="text-[#3b2a14]" />
          </span>
          <span className="font-bold">Learn from industry professionals with real-world experience.</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-500">
            <CheckCircle size={24} className="text-[#3b2a14]" />
          </span>
          <span className="font-bold">Study anytime, anywhere, at your own pace.</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-500">
            <CheckCircle size={24} className="text-[#3b2a14]" />
          </span>
          <span className="font-bold">Gain practical knowledge to advance in your field.</span>
        </li>
      </ul>

      {/* Rocket SVG and Dotted Path */}
       <div className="absolute bottom-80 right-0 translate-x-11 translate-y-10">
    {/* New Rocket SVG */}
    <svg
      fill="#000000"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 rotate-90 bottom-80"
    >
      <path d="M2.67 10.73a3.52 3.52 0 0 0-.94 1.93 5 5 0 0 0-.07 1.1v.58h.8a5.05 5.05 0 0 0 .88-.08 3.46 3.46 0 0 0 1.93-.94 1.76 1.76 0 0 0-.14-2.48 1.76 1.76 0 0 0-2.46-.11zm1.74 1.73a2.26 2.26 0 0 1-1.26.6h-.22v-.22a2.26 2.26 0 0 1 .6-1.26.36.36 0 0 1 .24-.08.67.67 0 0 1 .47.22.54.54 0 0 1 .17.74zM14.65 2.24a.91.91 0 0 0-.89-.89A8.75 8.75 0 0 0 7.27 3.5L5.64 5.4l-2.4-.5a1 1 0 0 0-.92.27l-.68.68a1 1 0 0 0-.28.81 1 1 0 0 0 .45.74l2.06 1.32.13.08 3.2 3.25.08.08 1.32 2.06a1 1 0 0 0 .74.45h.11a1 1 0 0 0 .7-.29l.68-.68a1 1 0 0 0 .27-.92l-.5-2.39 1.84-1.58a8.79 8.79 0 0 0 2.21-6.54zM3.11 6.15l1.32.28-.64.75-1-.67zm6.38 7.1-.67-1 .75-.64.28 1.32zm2.39-5.11.18.17zm-.28-.28L7.92 11 5 8.08 8.14 4.4a7.44 7.44 0 0 1 5.26-1.8 7.48 7.48 0 0 1-1.8 5.26z"></path>
      <path d="M11.13 6.63a1.19 1.19 0 0 0-.06-1.7 1.16 1.16 0 1 0-1.64 1.63 1.2 1.2 0 0 0 1.7.07z"></path>
    </svg>

    {/* Dotted trajectory path */}
    <svg className="absolute -top-16 -left-44 w-[200px] h-[120px]" viewBox="0 0 400 200">
      <path
        d="M 50 100 Q 200 50 350 120"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="6 4"
        className="opacity-80"
      />
    </svg>
  </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Main2
