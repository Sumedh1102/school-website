import React from 'react'
import { Circle, Star, Package, Candy, Smile, Zap } from "lucide-react"

const Hero = () => {
  const title = (
    <span>
      Cherished Moments in <em>Pictures</em>
    </span>
  );

  const description = (
    <span>
      Welcome to our gallery, a <strong>vibrant showcase</strong> of joy, creativity, and the magic of childhood! Here,
      we've captured some of our
      favorite moments, products, and inspirations to share with you.
    </span>
  );

  const className = "";

  return (
    <section className={`relative overflow-hidden bg-[#f5f2eb] px-4 py-16 md:py-24 ${className}`}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-yellow-500 opacity-80 md:block hidden">
        <Circle className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 text-yellow-500 opacity-80 md:block hidden">
        <Star className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-20 text-yellow-500 opacity-80 md:block hidden">
        <Package className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-20 text-yellow-500 opacity-80 md:block hidden">
        <Candy className="w-16 h-16" />
      </div>
      <div className="absolute left-1/4 bottom-1/3 text-yellow-500 opacity-80 md:block hidden">
        <Smile className="w-16 h-16" />
      </div>
      <div className="absolute right-1/4 bottom-1/3 text-yellow-500 opacity-80 md:block hidden">
        <Zap className="w-16 h-16" />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-domine text-[#1a0b42] mb-8">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-inter mx-auto">{description}</p>
      </div>
    </section>
  );
}

export default Hero;
