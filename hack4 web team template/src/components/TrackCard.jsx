function TrackCard({ title, description, icon }) {
    return (
      <div className="border border-green-900 p-6 rounded-lg bg-black/50">
        <div className="text-green-500 text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  }
  
  export default TrackCard;
  