function ProfileCard({ name, role, image, size = "medium" }) {
    const sizes = {
      small: "w-24 h-24",
      medium: "w-32 h-32",
      large: "w-40 h-40",
    };
  
    return (
      <div className="text-center border border-gray-700 p-4 rounded-lg bg-black/50">
        <img src={image} alt={name} className={`mx-auto rounded-full ${sizes[size]}`} />
        <h3 className="text-lg font-bold text-white mt-2">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    );
  }
  
  export default ProfileCard;
  