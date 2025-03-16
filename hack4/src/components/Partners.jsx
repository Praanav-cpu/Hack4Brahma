import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Shield, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const partnersRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-card', {
        scrollTrigger: {
          trigger: '.partners-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
      });
    }, partnersRef);

    return () => ctx.revert();
  }, []);

  const styles = {
    section: {
      backgroundColor: '#2F4F2F',
      padding: '80px 0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '64px',
      color: '#D8E4D8',
      fontFamily: "'Black Ops One', cursive",
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    card: {
      backgroundColor: '#1A2F1A',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      border: '2px solid #8FBC8F',
      transition: 'transform 0.3s ease',
    },
    icon: {
      color: '#8FBC8F',
      width: '48px',
      height: '48px',
      marginBottom: '16px',
    },
    partnerName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#D8E4D8',
      fontFamily: "'Roboto Mono', monospace",
    },
    description: {
      color: '#B8C8B8',
      lineHeight: '1.6',
      fontSize: '1rem',
    },
  };

  const partners = [
    {
      icon: <Building2 style={styles.icon} />,
      name: "TechForce Industries",
      description: "Leading defense technology provider"
    },
    {
      icon: <Shield style={styles.icon} />,
      name: "CyberShield Corp",
      description: "Cybersecurity solutions expert"
    },
    {
      icon: <Cpu style={styles.icon} />,
      name: "Military Tech Labs",
      description: "Advanced military research facility"
    }
  ];

  return (
    <div ref={partnersRef} style={styles.section} className="partners-section">
      <div style={styles.container}>
        <h2 style={styles.heading}>Community Partners</h2>
        <div style={styles.grid}>
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-card" 
              style={styles.card}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {partner.icon}
              <h3 style={styles.partnerName}>{partner.name}</h3>
              <p style={styles.description}>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;