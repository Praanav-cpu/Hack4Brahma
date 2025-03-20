// src/pages/Gallery.jsx
const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]
  
  function Gallery() {
    return (
      <section id="gallery" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION GALLERY</h2>
            <p className="text-gray-400">
              Intelligence from previous operations. Review these images to prepare for your mission.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-green-900/50 hover:border-green-500/50 transition-all duration-300"
              >
                <img src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Gallery
  