import React from 'react'

const Image = () => {
     const images = [
    {
      src: "https://i.pinimg.com/736x/61/bd/53/61bd5358162bf1ee942bbbcb94fc2c6e.jpg",
      alt: "Child with toys",
      height: "h-48",
    },
    {
      src: "https://i.pinimg.com/736x/57/2f/b6/572fb6d84a1a450e31e45c4ca5cac5d8.jpg",
      alt: "Kitchen activities",
      height: "h-40",
    },
    {
      src: "https://i.pinimg.com/736x/39/79/ca/3979cafea548c6745f9eb1bf9808305e.jpg",
      alt: "Reading together",
      height: "h-52",
    },
    {
      src: "https://i.pinimg.com/736x/6c/56/d6/6c56d663714636adb1271693dd9f5e56.jpg",
      alt: "Outdoor play",
      height: "h-32",
    },
    {
      src: "https://i.pinimg.com/736x/d7/c2/25/d7c225016b1ac35578346b2e1a836978.jpg",
      alt: "Picnic play",
      height: "h-36",
    },
    {
      src: "https://i.pinimg.com/736x/bb/36/b2/bb36b2e7c5631d58bc1661eeced150e4.jpg",
      alt: "Park reading",
      height: "h-64",
    },
    {
      src: "https://i.pinimg.com/736x/a2/07/4d/a2074dbbe9c9aae498438523f36130dd.jpg",
      alt: "Indoor pose",
      height: "h-40",
    },
    {
      src: "https://i.pinimg.com/736x/82/d1/85/82d185f0430227601851c2822e3f83c8.jpg",
      alt: "Building blocks",
      height: "h-56",
    },
     {
      src: "https://i.pinimg.com/736x/60/e1/2c/60e12c884b83cc5020b5cd39d1de69dc.jpg",
      alt: "Building blocks",
      height: "h-36",
    },
     {
      src: "https://i.pinimg.com/736x/ac/80/41/ac8041eac1fd18bf5f9b8fd76ab4db3a.jpg",
      alt: "Building blocks",
      height: "h-40",
    },
     {
      src: "https://i.pinimg.com/736x/21/eb/e0/21ebe094e0eb2e4d54243c7a4efa93ef.jpg",
      alt: "Building blocks",
      height: "h-36",
    }, {
      src: "https://i.pinimg.com/736x/22/9e/36/229e36290769cc8aff36f76a35d3b14a.jpg",
      alt: "Building blocks",
      height: "h-64",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f2eb] pt-10 mt-10 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mt-10">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid ">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white p-2 border-2 hover:border-yellow-500 ">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover rounded-xl  transition-transform duration-300`}
                  loading="lazy"
                />
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-3">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Image
