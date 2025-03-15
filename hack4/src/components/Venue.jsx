import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Bus, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Venue = () => {
  const venueRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.venue-content', {
        scrollTrigger: {
          trigger: '.venue-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });

      gsap.from('.venue-detail', {
        scrollTrigger: {
          trigger: '.venue-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, venueRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={venueRef} className="venue-section bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Base Location</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="venue-content space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Command Center</h3>
              <div className="space-y-4">
                <div className="venue-detail flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-4 text-military-green" />
                  <span>Tech Park, Sector 144, Noida, UP</span>
                </div>
                <div className="venue-detail flex items-center text-gray-300">
                  <Clock className="w-6 h-6 mr-4 text-military-green" />
                  <span>0900 hrs - 1800 hrs</span>
                </div>
                <div className="venue-detail flex items-center text-gray-300">
                  <Bus className="w-6 h-6 mr-4 text-military-green" />
                  <span>Shuttle service available from metro station</span>
                </div>
                <div className="venue-detail flex items-center text-gray-300">
                  <Phone className="w-6 h-6 mr-4 text-military-green" />
                  <span>+91 1234567890</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Facilities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>High-speed internet connection</li>
                <li>24/7 power backup</li>
                <li>Dedicated workstations</li>
                <li>Break rooms and cafeteria</li>
                <li>Medical support</li>
              </ul>
            </div>
          </div>
          <div className="venue-content h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Venue" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;