// src/pages/Hero.jsx
import { useEffect, useState } from "react"
import { ChevronDown, Shield } from "lucide-react"
import { Button } from "../components/ui/button"

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Splash Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0c0f]">
          <div className="text-center">
            <Shield className="h-24 w-24 text-green-500 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-green-500">HACK</span>4<span className="text-green-500">BRAHMA</span>
            </h1>
            <p className="text-xl font-mono text-gray-400">INITIALIZING MISSION...</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-green-500">HACK</span>4<span className="text-green-500">BRAHMA</span>
          </h1>
          <p className="text-xl md:text-2xl font-mono mb-8 text-gray-300">SPECIAL FORCES - INDIAN ARMY</p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the elite ranks of innovators in this military-themed hackathon. Deploy your skills, execute your
            strategy, and conquer the challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-green-700 hover:bg-green-600 text-white text-lg py-6 px-8">ENLIST NOW</Button>
            <Button
              variant="outline"
              className="border-green-700 text-green-500 hover:bg-green-900/30 text-lg py-6 px-8"
            >
              MISSION BRIEF
            </Button>
          </div>

          <ChevronDown className="h-8 w-8 mx-auto text-green-500 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
