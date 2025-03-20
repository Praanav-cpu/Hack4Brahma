import { useState } from "react";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <button className="w-full text-left font-bold text-green-500" onClick={() => setOpen(!open)}>
        {question}
      </button>
      {open && <p className="mt-2 text-gray-300">{answer}</p>}
    </div>
  );
}

export default FaqItem;
