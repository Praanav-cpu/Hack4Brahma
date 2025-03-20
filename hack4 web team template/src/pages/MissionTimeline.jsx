// src/pages/MissionTimeline.jsx
import MissionTimeline from "../components/mission-timeline"

function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-black/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION SCHEDULE</h2>
          <p className="text-gray-400">
            Strategic planning is crucial for mission success. Review the operation timeline to prepare for each phase
            of the hackathon.
          </p>
        </div>

        <MissionTimeline />
      </div>
    </section>
  )
}

export default Timeline

