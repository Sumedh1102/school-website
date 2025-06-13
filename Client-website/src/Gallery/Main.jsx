import React from 'react'
import video from '../Image/demo.mp4'

const Main = () => {
  return (
    <div className="w-full bg-[#f5f2eb] ">
      <div className="relative max-w-6xl mx-auto">
        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster.jpg" // optional: fallback image before video loads
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div className="relative -mt-8 md:-mt-12 lg:-mt-16 overflow-hidden">
          <div className="text-yellow-400 font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl whitespace-nowrap opacity-90 -translate-y-6 ">
            <span className="inline-block ">
              Showreel Showreel Showreel Showreel Showreel
            </span>
          </div>
        </div>
        </div>

        {/* Showreel Text */}
       
      </div>
    </div>
  )
}

export default Main
