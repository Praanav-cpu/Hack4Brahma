function PrizeCard({ position, amount, icon }) {
    return (
      <div className="border border-green-900 p-6 text-center rounded-lg bg-black/50">
        <div className="text-green-500 text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-bold text-white">{position} Place</h3>
        <p className="text-green-400 text-xl">{amount}</p>
      </div>
    );
  }
  
  export default PrizeCard;
  