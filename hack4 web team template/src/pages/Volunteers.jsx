import ProfileCard from "../components/profile-card";

const volunteers = [
  { name: "Corporal Gupta", role: "Technical Support", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Reddy", role: "Registration", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Joshi", role: "Participant Support", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Verma", role: "Judging Assistant", image: "/placeholder.svg?height=150&width=150" },
];

function Volunteers() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Volunteer Team</h2>
        <p className="text-gray-400 text-center mb-10">
          Meet the dedicated personnel providing support throughout the event.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {volunteers.map((person, index) => (
            <ProfileCard key={index} name={person.name} role={person.role} image={person.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteers;
