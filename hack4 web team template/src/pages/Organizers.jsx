import ProfileCard from "../components/profile-card";

const organizers = [
  { name: "Major Sharma", role: "Lead Organizer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Captain Singh", role: "Technical Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Lieutenant Patel", role: "Operations", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sergeant Kumar", role: "Logistics", image: "/placeholder.svg?height=200&width=200" },
];

function Organizers() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Organizing Team</h2>
        <p className="text-gray-400 text-center mb-10">
          Meet the team overseeing the operation and ensuring its success.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map((person, index) => (
            <ProfileCard key={index} name={person.name} role={person.role} image={person.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;