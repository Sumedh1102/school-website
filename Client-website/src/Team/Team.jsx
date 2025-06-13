import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import img1 from '../Memberimg/member1.png'
import img2 from '../Memberimg/member2.png'
import img3 from '../Memberimg/member3.png'
import img4 from '../Memberimg/member4.png'
import img5 from '../Memberimg/member5.png'
import img6 from '../Memberimg/member6.png'

const Team = () => {

      const teamMembers = [
    {
      name: "Marvin McKinney",
      role: "Business Development",
      image: img1,
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      image: img2,
    },
    {
      name: "Bessie Cooper",
      role: "Software Developer",
      image: img3,
    },
    {
      name: "Wade Warren",
      role: "Meta Marketer",
      image: img4,
    },
    {
      name: "Ronald Richards",
      role: "Graphic Designer",
      image: img5,
    },
    {
      name: "Albert Flores",
      role: "Digital Marketer",
      image: img6,
    },
  ]
  return (
    <section className="bg-[#f5f2eb] px-6 md:px-20 py-16 m-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-domine text-center mb-20">
          <span className="text-[#3b2a14]">Meet Our </span>
          <span className="text-[#f47c45] underline">Expert Team</span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Member Image with colored background */}
              <div
                className={`relative p-4`}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Member Info */}
              <div className="p-4">
                <h3 className="font-semibold text-xl text-center mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-3">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-3 justify-center">
                  <Instagram className="w-5 h-5 text-black hover:text-purple-500  cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-black hover:text-purple-500  cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-black hover:text-purple-500  cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-black hover:text-purple-500  cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
