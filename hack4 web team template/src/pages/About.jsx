// src/pages/About.jsx
import { Card } from "../components/ui/card"
import CountUp from "../components/count-up"

const stats = [
  { label: "Prize Pool", value: 50000, prefix: "₹", suffix: "+" },
  { label: "Registrations", value: 500, suffix: "+" },
  { label: "Hackers", value: 200, suffix: "+" },
  { label: "Projects", value: 75, suffix: "+" },
]

function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION BRIEF</h2>
          <p className="text-gray-400">
            Hack4Brahma is an elite hackathon inspired by the Special Forces of the Indian Army. Our mission is to bring
            together the brightest minds to develop innovative solutions for challenges faced in tactical and strategic
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="stat-card bg-black/50 border-green-900/50 backdrop-blur-sm p-6 text-center"
            >
              <h3 className="text-gray-400 font-mono text-sm mb-2">{stat.label}</h3>
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                <CountUp start={0} end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
