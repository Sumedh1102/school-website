import React from 'react'
import { Sun, Heart } from "lucide-react"
import img1 from '../Image/imgmain1.png'
import img2 from '../Image/imgmain2.png'
import img3 from '../Image/imgmain3.png'
import img4 from '../Image/imgmain4.png'

const Main2 = () => {
  return (
  <div className="w-full bg-[#f5f2eb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute left-0 top-0">
            <Sun className="h-16 w-16 text-yellow-400 opacity-0 lg:opacity-100" />
          </div>
          <div className="absolute right-0 top-0">
            <Heart className="h-12 w-12 text-red-400 opacity-0 lg:opacity-100" />
          </div>

          <p className="text-[#3b2a14] text-lg font-inter mb-4">We focus on one impactful lesson at a time</p>
          <h2 className="text-[#3b2a14] font-bold text-5xl lg:text-6xl font-domine">
            Shaping the <span className="text-[#f47c45] font-thin">future</span> of kids
          </h2>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Letter Identification - Star Shape */}
          <div className="flex flex-col items-center text-center">
           <div className="relative w-[220px] h-[250px] m-5">
              {/* Background blob */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)", // decorative shape
                  backgroundColor: "#4fc3f7",
                }}
              ></div>

              {/* Image that pops out */}
              <img
                src={img1}
                className="relative z-10 -top-4 w-[180px] mx-auto"
                alt="Girl"
              />
            </div>
            <h3 className="text-[#3b2a14] font-semibold font-inter text-xl mb-2">Letter Identification</h3>
            <p className="text-gray-600">Class - Pre School</p>
          </div>

          {/* General Knowledge - Pentagon Shape */}
          <div className="flex flex-col items-center text-center">
           <div className="relative w-48 h-60 m-5">
               {/* Background decorative shape */}
               <div
                 className="absolute inset-0 z-0"
                 style={{
                   clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                   backgroundColor: "#ff8a65",
                 }}
               ></div>

               {/* Image that pops out */}
               <img
                 src={img2}
                 alt="Girl reading for general knowledge"
                 width={180}
                 height={180}
                 className="relative z-10 -top-6 mx-auto object-cover left-2"
               />
             </div>

            <h3 className="text-[#3b2a14] font-semibold font-inter text-xl mb-2">General Knowledge</h3>
            <p className="text-gray-600">Fourth Grade</p>
          </div>

          {/* Geography Quiz - Circle Shape */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-60 m-5">
              {/* Background circular shape */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  clipPath: "circle(50% at 50% 60%)",
                  backgroundColor: "#66bb6a",
                }}
              ></div>
            
              {/* Image that pops out */}
              <img
                src={img3}
                alt="Girl with glasses holding globe"
                width={180}
                height={180}
                className="relative z-10 -top-8 mx-auto object-cover left-1"
              />
            </div>

            <h3 className="text-[#3b2a14] font-semibold font-inter text-xl mb-2">Geography Quiz</h3>
            <p className="text-gray-600">First Grade</p>
          </div>

          {/* Visual Arts Training - Cloud Shape */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-60 m-5">
              {/* Background with custom blob/star shape */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  clipPath:
                    "polygon(25% 30%, 0% 50%, 15% 80%, 40% 90%, 60% 85%, 80% 90%, 100% 70%, 90% 40%, 75% 20%, 50% 10%, 30% 20%)",
                  backgroundColor: "#ffeb3b",
                }}
              ></div>
            
              {/* Popping image */}
              <img
                src={img4}
                alt="Girl with laptop for visual arts"
                width={180}
                height={180}
                className="relative z-10 -top-6 mx-auto object-cover"
              />
            </div>
            <h3 className="text-[#3b2a14] font-semibold font-inter text-xl mb-2">Visual Arts Training</h3>
            <p className="text-gray-600">Sketching class</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main2
