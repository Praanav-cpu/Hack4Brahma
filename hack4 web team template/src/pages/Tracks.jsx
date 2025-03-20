import TrackCard from "../components/track-card";

const tracks = [
  {
    title: "Cyber Defense",
    description: "Develop solutions for military-grade cybersecurity challenges and threat detection systems.",
    icon: "Shield",
  },
  {
    title: "Tactical Communications",
    description: "Create secure communication systems that can operate in hostile environments with limited connectivity.",
    icon: "Globe",
  },
  {
    title: "Reconnaissance Tech",
    description: "Build innovative surveillance and intelligence gathering solutions using cutting-edge technology.",
    icon: "Compass",
  },
  {
    title: "Combat Support",
    description: "Design applications that enhance battlefield awareness and decision-making capabilities.",
    icon: "Target",
  },
];

function Tracks() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Hackathon Tracks</h2>
        <p className="text-gray-400 text-center mb-10">
          Choose your specialization and focus your expertise on one of these critical mission areas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <TrackCard key={index} title={track.title} description={track.description} icon={track.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tracks;