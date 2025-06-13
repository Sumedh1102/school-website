import React from 'react'
import cardimg1 from '../assets/cardimgbg.png'
import cardimg2 from '../assets/imgcard2.png'
import cardimg3 from '../assets/imgcard3.png'
import { useNavigate } from "react-router-dom";

const navItems = [
  { path: "/contact", link: "" },
];


const Main = () => {

  const navigate = useNavigate(); // <-- initialize navigate
  
    const handlecontactClick = () => {
      navigate(navItems[0].path); // navigates to "/contact us"
    }; 

  return (
    <>
    <div className="w-full bg-[#f5f2eb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="flex-1">
            <h2 className="text-[#3b2a14] font-bold text-4xl lg:text-5xl mb-4 font-domine">
              Smart and clever kids
              <br />
              ready to fly high!
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-center">
            <p className="text-[#3b2a14] text-lg mb-4 text-center font-inter">
              Learn smartly with us. We teach 'One
              <br />
              Smart Lesson' at a time!
            </p>
            <button onClick={handlecontactClick} className="border-2 font-inter border-[#3b2a14] text-[#3b2a14] hover:bg-[#3b2a14] hover:text-white font-medium py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Life Skills Card */}
          <div className="bg-[#f47c45] rounded-3xl p-8 relative overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h3 className="text-white font-light text-3xl mb-4 font-domine">
                Life Skills
                <br />
                for Kids
              </h3>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-white opacity-50">
                <path
                  d="M15 20C15 12 20 8 28 8C36 8 45 12 45 20C45 28 36 32 28 32C20 32 15 28 15 20Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M8 25C8 20 12 18 18 18C24 18 30 20 30 25C30 30 24 32 18 32C12 32 8 30 8 25Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="absolute bottom-4 left-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white opacity-50">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Child image */}
            <div className="absolute bottom-24 right-0 w-56 h-56">
              <img
                src={cardimg1}
                alt="Girl with glasses holding books"
                width={300}
                height={300}
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Imagination Card */}
          <div className="bg-[#6b9b47] rounded-3xl p-8 relative overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h3 className="text-white font-light font-domine text-3xl mb-4">
                Imagination
                <br />
                is power
              </h3>
            </div>

            {/* Decorative circle */}
            <div className="absolute top-8 right-8">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-yellow-400">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>

            {/* Child image */}
            <div className="absolute bottom-28 right-0 w-56 h-56">
              <img
                src={cardimg2}
                alt="Boy holding green craft"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Growth Card */}
          <div className="bg-[#4a90e2] rounded-3xl p-8 relative overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h3 className="text-white font-light font-domine text-3xl mb-4">
                Grow
                <br />
                your own
                <br />
                wings
              </h3>
            </div>

            {/* Wing decorations */}
            <div className="absolute top-4 right-4">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-white opacity-30">
                <path
                  d="M10 20C10 10 20 5 30 10C40 15 50 20 45 30C40 35 30 35 20 30C15 25 10 25 10 20Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="absolute bottom-20 left-4">
              <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-white opacity-30">
                <path d="M5 15C5 8 12 3 20 6C28 9 35 15 32 22C29 26 20 26 12 22C8 19 5 19 5 15Z" fill="currentColor" />
              </svg>
            </div>

            {/* Child image */}
            <div className="absolute bottom-24 right-0 w-56 h-56">
              <img
                src={cardimg3}
                alt="Boy with backpack"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
