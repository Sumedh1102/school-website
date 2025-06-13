import React from 'react'
import { useState } from 'react'


const blogPosts = [
  {
    id: 1,
    title: "How Online Learning Is Reshaping Classrooms",
    category: "Education",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/57/29/6b/57296ba3c8a4d405185f9299bf43c929.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Latest", "Popular"],
    isPopular: true,
    isLatest: true,
  },
  {
    id: 2,
    title: "Top Skills Every Student Needs In 2025",
    category: "Skills",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/ed/0a/d4/ed0ad4993ee735010ac5d64b3554dce7.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Skills", "Latest"],
    isDesign: true,
    isLatest: true,
  },
  {
    id: 3,
    title: "Why Project-Based Learning Is the Future of Schools",
    category: "Innovation",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/39/79/ca/3979cafea548c6745f9eb1bf9808305e.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Popular"],
    isPopular: true,
  },
  {
    id: 4,
    title: "The Role of Teachers in a Tech-Driven Classroom",
    category: "Teaching",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/27/32/af/2732af67558660d678d52bb01241ac40.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Latest"],
    isLatest: true,
  },
  {
    id: 5,
    title: "A Guide to Lifelong Learning for Students",
    category: "Learning",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/af/4a/b5/af4ab508be5770c89bfc67670adb85d8.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Popular"],
    isPopular: true,
  },
  {
    id: 6,
    title: "How Our School App Supports Student Success",
    category: "Technology",
    date: "February 17, 2025",
    image: "https://i.pinimg.com/736x/4c/bf/90/4cbf908422407f4aec51d0daf88b5669.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Latest"],
    isLatest: true,
  },
  {
    id: 7,
    title: "Creative Design Projects from Our Art Class",
    category: "Art & Design",
    date: "February 15, 2025",
    image: "https://i.pinimg.com/736x/46/e4/a0/46e4a056a09eae3041e518846192398b.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Art & Design"],
    isDesign: true,
  },
  {
    id: 8,
    title: "How Students Are Using Design to Tell Stories",
    category: "Art & Design",
    date: "February 14, 2025",
    image: "https://i.pinimg.com/736x/f2/25/5c/f2255c68c490f513dd17ff876e17d9d9.jpg",
    categoryColor: "bg-gray-100 text-gray-700",
    filters: ["All", "Art & Design", "Popular"],
    isDesign: true,
    isPopular: true,
  },
]

// Add filtering function
const getFilteredPosts = (filter) => {
  switch (filter) {
    case "Latest":
      return blogPosts.filter((post) => post.isLatest)
    case "Popular":
      return blogPosts.filter((post) => post.isPopular)
    case "Design":
      return blogPosts.filter((post) => post.isDesign)
    case "All":
    default:
      return blogPosts
  }
}

const filterTabs = ["All", "Latest", "Popular", "Design"]

const Main = () => {


const [activeFilter, setActiveFilter] = useState("Latest")
const filteredPosts = getFilteredPosts(activeFilter)


  return (
    <>
    <div className="w-full bg-[#f5f2eb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       

<div className="relative text-center mb-12">
  {/* Left Side Icons */}
  <img
    src="https://www.svgrepo.com/show/263511/school-classroom.svg"
    alt="School Classroom"
    className="absolute left-6 top-[10%] w-10 md:w-16 opacity-0 lg:opacity-100 rotate-[-12deg]"
  />
  <img
    src="https://www.svgrepo.com/show/263503/blackboard-class.svg"
    alt="Blackboard"
    className="absolute left-10 top-[110%] w-12 md:w-16 opacity-0 lg:opacity-100 rotate-[10deg]"
  />
  <img
    src="https://www.svgrepo.com/show/263496/light-bulb-idea.svg"
    alt="Idea Bulb"
    className="absolute left-4 bottom-[10%] w-10 md:w-14 opacity-0 lg:opacity-100 rotate-[6deg]"
  />

  {/* Right Side Icons */}
  <img
    src="https://www.svgrepo.com/show/263501/badge-reward.svg"
    alt="Idea Bulb"
    className="absolute right-6 top-[15%] w-10 md:w-14 opacity-0 lg:opacity-100 rotate-[-8deg]"
  />
  <img
    src="https://www.svgrepo.com/show/263486/calculator.svg"
    alt="Blackboard"
    className="absolute right-0 top-[70%] w-12 md:w-16 opacity-0 lg:opacity-100 rotate-[-6deg]"
  />
  <img
    src="https://www.svgrepo.com/show/263495/board.svg"
    alt="Classroom"
    className="absolute right-4 top-[110%] w-10 md:w-14 opacity-0 lg:opacity-100 rotate-[10deg]"
  />

  {/* Heading Content */}
  <h1 className="text-5xl md:text-8xl font-domine font-bold text-[#3b2a14] mb-6">
    Our Resources & <span className="text-[#f47c45]">Blogs</span>
  </h1>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-inter">
    Discover valuable insights and resources to boost your learning and career growth on the BrightMind blog.
  </p>
</div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-slate-200 rounded-full p-2 shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full transition-all duration-200 font-medium ${
                  activeFilter === tab
                    ? "bg-[#f47c45] text-white shadow-md hover:bg-purple-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredPosts.length} {activeFilter.toLowerCase()} {filteredPosts.length === 1 ? "post" : "posts"}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer border-2 hover:border-orange-500  transition-all duration-300 transform  bg-white rounded-2xl overflow-hidden animate-in fade-in-50"
            >
              <div className="p-0">
                <div className="relative overflow-hidden">
                 <img
                   src={post.image || "/placeholder.svg"}
                   alt={post.title}
                   width={400}
                   height={300}
                   className="w-full h-64 object-cover transition-transform duration-300  p-4 rounded-[30px]"
                 />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full ${post.categoryColor}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-xl font-inter font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#f47c45] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Main
