import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Medal, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Prizes = () => {
  const prizesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prize-card', {
        scrollTrigger: {
          trigger: '.prizes-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3
      });
    }, prizesRef);

    return () => ctx.revert();
  }, []);

  const prizes = [
    {
      icon: <Trophy className="w-16 h-16" />,
      place: "1st Place",
      amount: "₹1,00,000",
      perks: ["Direct job offers", "Mentorship program", "Tech hardware bundle"]
    },
    {
      icon: <Medal className="w-16 h-16" />,
      place: "2nd Place",
      amount: "₹50,000",
      perks: ["Internship opportunities", "Cloud credits", "Tech gadgets"]
    },
    {
      icon: <Award className="w-16 h-16" />,
      place: "3rd Place",
      amount: "₹25,000",
      perks: ["Training programs", "Software licenses", "Swag kit"]
    }
  ];

  return (
    <div ref={prizesRef} className="prizes-section bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Prize Pool</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`prize-card p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 ${
                index === 0 ? 'bg-gradient-to-br from-yellow-900 to-yellow-700' :
                index === 1 ? 'bg-gradient-to-br from-gray-700 to-gray-600' :
                'bg-gradient-to-br from-amber-900 to-amber-700'
              }`}
            >
              <div className="text-white mb-6 flex justify-center">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{prize.place}</h3>
              <p className="text-3xl font-bold mb-6 text-center text-white">{prize.amount}</p>
              <ul className="space-y-2">
                {prize.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="text-gray-200 flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prizes;