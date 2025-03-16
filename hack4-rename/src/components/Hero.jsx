import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
 

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
      });

       
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroStyles = {
    container: {
      position: 'relative',
      height: '100vh',
      width : '',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#2F4F2F', // Dark olive green
      backgroundImage: 'linear-gradient(rgba(47, 79, 47, 0.9), rgba(47, 79, 47, 0.6))',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    
  
    content: {
      zIndex: 10,
      textAlign: 'center',
      padding: '0 20px',
    },
    title: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#D8E4D8', // Light sage
      fontFamily: "'Black Ops One', cursive",
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#B8C8B8', // Muted sage
      fontFamily: "'Roboto Mono', monospace",
    },
    button: {
      padding: '12px 32px',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: '0 12px',
    },
    primaryButton: {
      backgroundColor: '#4A5D4A', // Military green
      color: '#D8E4D8',
      border: 'none',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#D8E4D8',
      border: '2px solid #D8E4D8',
    }
  };

  return (
    <div ref={heroRef} style={heroStyles.container}>
      <div style={heroStyles.overlay}></div>
      
      
      <div style={heroStyles.content}>
        <h1 className="hero-title" style={heroStyles.title}>
          HACK4BRAHMA
        </h1>
        <p className="hero-subtitle" style={heroStyles.subtitle}>
          Where Code Meets Combat Excellence
        </p>
        <div>
          <button style={{...heroStyles.button, ...heroStyles.primaryButton}}>
            Register Now
          </button>
          <button style={{...heroStyles.button, ...heroStyles.secondaryButton}}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;