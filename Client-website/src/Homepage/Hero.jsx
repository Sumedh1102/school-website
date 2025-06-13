import React from 'react'
import img from '../assets/imgbg1.png'
import img2 from '../assets/imgbg2.png'
import laptop from '../Image/laptop.png'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const navItems = [
  { path: "/contact", link: "" },
];

const hero = () => {

    const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])
  

  {/*-----  ------- ------- -------- -------- ------- ------ ----- ---*/}

  const navigate = useNavigate(); // <-- initialize navigate

  const handleContactClick = () => {
    navigate(navItems[0].path); // navigates to "/contact us"
  }; 

      
  return (
   <>
   <div className="min-h-screen bg-[#f5f2eb] flex flex-col items-center px-4 py-8 md:py-12">
      <div className="max-w-7xl w-full mx-auto mb-20 ">
        {/* Header with decorative elements */}
        <div className="relative mb-8 md:mb-12">
          {/* Decorative elements - hidden on very small screens */}
          <div className="hidden sm:block absolute left-0 md:left-10 top-0 rotate-[-12deg]">
            <img
              src="https://www.svgrepo.com/show/275435/hot-air-balloon.svg"
              alt="Decorative hot air balloon"
              width={isMobile ? 50 : 70}
              height={isMobile ? 50 : 70}
            />
          </div>
          <div className="hidden sm:block absolute right-0 md:right-10 top-0">
            <img
              src="https://www.svgrepo.com/show/315897/tennis-ball.svg"
              alt="Decorative tennis ball"
              width={isMobile ? 30 : 40}
              height={isMobile ? 30 : 40}
            />
          </div>

          {/* Main heading */}
          <h1 className="text-center font-domine text-[#3b2a14] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto px-4 ">
            Putting your <span className="font-serif font-thin text-4xl sm:text-5xl md:text-6xl">child&apos;s</span>{" "}
            Future
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            in great motion
          </h1>
        </div>

        {/* Main content with images and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
          {/* Left child image */}
          <div className="relative flex justify-center md:block">
            <div className="bg-[#8cd563] h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] rounded-full relative mx-auto md:mr-0 md:ml-auto">
              <div className="absolute inset-0">
                <img
                  src={img}
                  alt="Child with backpack"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-4 sm:-left-8 md:-left-10 top-1/2 transform -translate-y-1/2">
                <img
                  src="https://www.svgrepo.com/show/228776/dart-board-target.svg"
                  alt="Target illustration"
                  width={isMobile ? 60 : 80}
                  height={isMobile ? 60 : 80}
                />
              </div>
            </div>
          </div>

          {/* Middle section with CTA */}
          <div className="flex flex-col items-center justify-center py-4 md:py-0">
            <button onClick={handleContactClick} className="bg-[#f47c45] hover:bg-[#e06a35] text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-tl-2xl rounded-br-2xl flex items-center gap-2 mb-8 md:mb-12 transition-colors font-merriweather">
              Start Learning
            </button>

            <p className="text-center font-semibold text-[#3b2a14] text-base md:text-lg max-w-sm px-4 font-inter">
              We just don&apos;t give our students only lecture but real life experiences.
            </p>

            <div className="mt-6 md:m-10 max-w-full">
              <img
                src={laptop}
                alt="Laptop with educational elements"
                width={500}
                height={500}
                className="w-full max-w-[300px] md:max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Right child image */}
          <div className="relative flex justify-center md:block">
            <div className="bg-[#ffd651] h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] rounded-full relative mx-auto md:ml-0 md:mr-auto">
               <div className="absolute inset-0">
                <img
                  src={img2}
                  alt="Child with backpack"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-4 sm:-right-8 md:-right-10 top-1/2 transform -translate-y-1/2">
                <img
                  src="https://www.svgrepo.com/show/382161/back-bag-bag-education-learning-school-school-bag.svg"
                  alt="Backpack illustration"
                  width={isMobile ? 40 : 60}
                  height={isMobile ? 40 : 60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/*--------------------------------------------------------------*/}
       <div className="relative w-full max-w-[1300px] mx-auto bg-[#362517] rounded-bl-[20px] md:rounded-bl-[40px] rounded-tr-[20px] md:rounded-tr-[40px]">
      <div className="absolute top-0 right-0 p-2 md:p-0">
        <img
          src="https://www.svgrepo.com/show/362134/paper-plane.svg"
          alt="Paper plane"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#4a372a]">
        {/* Schools stat */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-start">
          <div className="bg-[#f47c45] p-2 md:p-3 rounded-lg mb-3 md:mb-4">
            <img
              src="https://www.svgrepo.com/show/334294/support.svg"
              alt="Support icon"
              className="h-3 w-3 md:h-4 md:w-4"
            />
          </div>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 md:mb-3 font-domine ">50+</h3>
          <p className="text-gray-300 text-base sm:text-base font-inter">
            Schools are supported
            <br />
            across 29 states
          </p>
        </div>

        {/* Students stat */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-start">
          <div className="bg-[#ffd651] p-2 md:p-3 rounded-lg mb-3 md:mb-4">
            <img src="https://www.svgrepo.com/show/503038/help.svg" alt="Help icon" className="h-3 w-3 md:h-4 md:w-4" />
          </div>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 md:mb-3 font-domine ">12K+</h3>
          <p className="text-gray-300 text-base sm:text-base font-inter">
            Helping the students
            <br />
            of all ages thrive
          </p>
        </div>

        {/* Workspaces stat */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-start">
          <div className="bg-[#8cd563] p-2 md:p-3 rounded-lg mb-3 md:mb-4">
            <img
              src="https://www.svgrepo.com/show/224336/workspace.svg"
              alt="Workspace icon"
              className="h-3 w-3 md:h-4 md:w-4"
            />
          </div>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 md:mb-3 font-domine ">70+</h3>
          <p className="text-gray-300 text-base sm:text-base font-inter">
            Available field workspaces
            <br />
            and increasing
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default hero
