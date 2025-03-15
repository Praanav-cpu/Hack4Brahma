import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Shield, Cpu, Globe, Lock } from 'lucide-react';

const Tracks = () => {
  const tracksRef = useRef(null);

  const tracks = [
    { 
      icon: Shield,
      name: 'Defense Tech',
      description: 'Develop solutions for cybersecurity and defense systems'
    },
    {
      icon: Cpu,
      name: 'AI Warfare',
      description: 'Create AI-powered applications for tactical advantage'
    },
    {
      icon: Globe,
      name: 'Command & Control',
      description: 'Build command center applications and monitoring systems'
    },
    {
      icon: Lock,
      name: 'Secure Comms',
      description: 'Design encrypted communication solutions'
    }
  ];

  useEffect(() => {
    gsap.from('.track-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: tracksRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section ref={tracksRef} className="section tracks" style={{
      background: 'var(--bg-dark)'
    }}>
      <div className="container">
        <h2 className="section-title">Battle Tracks</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '2rem'
        }}>
          {tracks.map((Track, index) => (
            <div 
              key={index}
              className="track-card"
              style={{
                background: 'rgba(75, 83, 32, 0.3)',
                padding: '2rem',
                borderRadius: '8px',
                border: '2px solid var(--accent-color)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Track.icon size={48} color="var(--accent-color)" />
              <h3 style={{ 
                color: 'var(--accent-color)',
                margin: '1rem 0',
                fontSize: '1.5rem'
              }}>
                {Track.name}
              </h3>
              <p style={{ color: 'var(--text-color)' }}>{Track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;