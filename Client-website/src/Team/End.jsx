import React from 'react'
import { useNavigate } from "react-router-dom";

const navItems = [
  { path: "/contact", link: "" },
];

const End = () => {

  const navigate = useNavigate(); // <-- initialize navigate
    
      const handlecontactClick = () => {
        navigate(navItems[0].path); // navigates to "/contact us"
      }; 

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-6 sm:py-8 md:py-10">
      <section className="relative w-full bg-[#f47c45] rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="font-bold font-domine text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mb-6 sm:mb-8 md:mb-10">
            Take The First Step – Start Learning Today!
          </h2>
          <button onClick={handlecontactClick} className="bg-white text-black font-semibold rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-2xl hover:scale-105 transition-transform duration-300">
            Contact Us
          </button>
        </div>

        {/* Decorative floating images */}
        <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-6 md:left-8 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] pointer-events-none">
          <div className="w-full h-full rounded-xl bg-teal-200 shadow-md overflow-hidden rotate-12">
            <img
              src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
              alt="Student 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-6 md:right-8 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] pointer-events-none">
          <div className="w-full h-full rounded-full bg-orange-200 shadow-md overflow-hidden -rotate-6">
            <img
              src="https://i.pinimg.com/736x/e5/5d/d7/e55dd7dea6905491b6dcd4ce40ceaec1.jpg"
              alt="Student 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-6 sm:left-8 md:left-10 lg:left-12 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] pointer-events-none">
          <div
            className="w-full h-full bg-red-200 shadow-md overflow-hidden rotate-6"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/fb/eb/d4/fbebd4ddfed3f4c2dab3193552be7851.jpg"
              alt="Student 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-6 sm:right-8 md:right-10 lg:right-12 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] pointer-events-none">
          <div
            className="w-full h-full shadow-md overflow-hidden -rotate-12"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            <div className="w-full h-full bg-teal-200">
              <img
                src="https://i.pinimg.com/736x/55/06/62/55066253d0d056c690cfb49f4f91ff82.jpg"
                alt="Student 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default End
