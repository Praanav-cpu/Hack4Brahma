import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Code, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const styles = {
    section: {
      backgroundColor: '#1A2F1A', // Darker olive green
      padding: '80px 0',
      color: '#D8E4D8',
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
      backgroundColor: '#2F4F2F',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      border: '1px solid #4A5D4A',
    },
    icon: {
      width: '48px',
      height: '48px',
      marginBottom: '16px',
      color: '#8FBC8F',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#D8E4D8',
      fontFamily: "'Roboto Mono', monospace",
    },
    cardText: {
      color: '#B8C8B8',
      lineHeight: '1.6',
    },
  };

  return (
    <div ref={aboutRef} style={styles.section} className="about-section">
      <div style={styles.container}>
        <h2 style={styles.heading}>About Hack4Brahma</h2>
        
        <div style={styles.grid}>
          <div className="about-card" style={styles.card}>
            <Shield style={styles.icon} />
            <h3 style={styles.cardTitle}>Mission</h3>
            <p style={styles.cardText}>
              Empowering developers to create innovative solutions with a military-grade mindset.
            </p>
          </div>

          <div className="about-card" style={styles.card}>
            <Code style={styles.icon} />
            <h3 style={styles.cardTitle}>Challenge</h3>
            <p style={styles.cardText}>
              48 hours of intense coding, problem-solving, and strategic thinking.
            </p>
          </div>

          <div className="about-card" style={styles.card}>
            <Trophy style={styles.icon} />
            <h3 style={styles.cardTitle}>Victory</h3>
            <p style={styles.cardText}>
              Compete for glory and substantial prizes while making a real impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;