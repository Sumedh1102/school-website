import last from '../Image/last1.png'
import { useNavigate } from "react-router-dom";

const navItems = [
  { path: "/about", link: "" },
];


const Last = () => {

    const navigate = useNavigate(); // <-- initialize navigate
  
    const handleAboutClick = () => {
      navigate(navItems[0].path); // navigates to "/About us"
    }; 

  return (
        <div className="bg-[#f5f2eb] py-6 md:py-12 px-2 md:px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 md:gap-6  p-4 md:p-8 bg-[#f5f2eb] max-w-8xl mx-auto">
        {/* Left Card - 100% on mobile, 60% on desktop */}
        <div className="w-full lg:basis-[60%] relative bg-[#FFEB3B] rounded-xl p-4 md:p-6 min-h-[300px] flex flex-col justify-between mb-2 md:mb-20 lg:mb-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin font-serif text-gray-900 mb-2 md:mb-3">
              Confidence that <br className="hidden sm:block" /> builds a brighter future.
            </h2>
            <p className="text-sm md:text-base text-gray-800 mb-3 md:mb-4 font-sans">
              Empowering kids with confidence to <br className="hidden sm:block" /> create a successful future.
            </p>
            <button onClick={handleAboutClick} className="bg-white text-black font-semibold py-1.5 md:py-2 px-3 md:px-4 rounded-md shadow hover:bg-gray-100 transition text-sm md:text-base">
              Learn More →
            </button>
          </div>

          {/* Kid Image - positioned differently based on screen size */}
          <div className="absolute -bottom-16 md:-bottom-20 lg:bottom-8 right-0 lg:translate-y-1/4 -translate-y-16 flex justify-center w-full lg:w-auto">
            <img
              src={last}
              alt="Kid holding books"
              width={350}
              height={350}
              className="h-[200px] md:h-[0px] lg:h-[575px] object-contain"
            />
          </div>
        </div>

        {/* Right Card - 100% on mobile, 40% on desktop */}
        <div className="w-full lg:basis-[40%] bg-[#FF6F3C] rounded-xl p-4 md:p-6 text-white min-h-[200px] md:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center relative">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-thin font-serif mb-2 md:mb-3">
            Helping kids <br className="hidden sm:block" /> to shoot their dreams.
          </h2>
          <p className="text-sm md:text-base mb-4 text-white font-sans">
            Inspiring kids to aim <span className="font-bold">achieve.</span>
          </p>

          {/* Pinwheel Icon - responsive size */}
          <div className="absolute bottom-0 right-2 md:right-4">
            <img
              src="https://www.svgrepo.com/show/530144/school.svg"
              alt="School icon"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Last
