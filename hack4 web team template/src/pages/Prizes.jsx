// src/pages/Prizes.jsx
import PrizeCard from "../components/prize-card"
import { Shield, Trophy, Award } from "lucide-react"

const prizes = [
  { position: "1st", amount: "₹25,000", icon: <Trophy className="h-8 w-8" /> },
  { position: "2nd", amount: "₹15,000", icon: <Award className="h-8 w-8" /> },
  { position: "3rd", amount: "₹10,000", icon: <Shield className="h-8 w-8" /> },
]

function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-black/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">PRIZE POOL</h2>
          <p className="text-gray-400">
            Complete your mission objectives and be rewarded for your excellence. Top-performing teams will receive
            recognition and substantial rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <PrizeCard
              key={index}
              position={prize.position}
              amount={prize.amount}
              icon={prize.icon}
              className="prize-card bg-black/50 border-green-900/50 backdrop-blur-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prizes
