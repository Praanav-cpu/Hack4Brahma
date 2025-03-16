import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Flag, Code, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      icon: <Flag className="w-6 h-6" />,
      time: "Day 1 - 0900 hrs",
      title: "Opening Ceremony",
      description: "Mission briefing and team formation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      time: "Day 1 - 1000 hrs",
      title: "Coding Begins",
      description: "Teams deploy to their stations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      time: "Day 2 - 0900 hrs",
      title: "Checkpoint Review",
      description: "Progress assessment and mentoring"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      time: "Day 2 - 1700 hrs",
      title: "Final Submission",
      description: "Mission completion and demonstrations"
    }
  ];

  return (
    <div ref={timelineRef} className="timeline-section bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Mission Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-military-green"></div>
          {events.map((event, index) => (
            <div key={index} className="timeline-item relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="text-military-green mb-2">{event.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{event.time}</h3>
                    <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-military-green rounded-full border-4 border-gray-800 z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;