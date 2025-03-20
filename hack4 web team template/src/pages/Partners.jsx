// src/pages/Partners.jsx
const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
  ]
  
  function Partners() {
    return (
      <section id="partners" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">COMMUNITY PARTNERS</h2>
            <p className="text-gray-400">
              Our mission is supported by these strategic allies who provide resources, expertise, and support to ensure
              operational success.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-logo bg-black/30 border border-green-900/30 rounded-lg p-4 flex items-center justify-center hover:border-green-500/50 transition-all duration-300"
              >
                <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="max-h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Partners
  