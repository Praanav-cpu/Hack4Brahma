import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  const styles = {
    section: {
      backgroundColor: '#1A2F1A',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
    },
    galleryItem: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      border: '2px solid #4A5D4A',
    },
    image: {
      width: '100%',
      height: '256px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(26, 47, 26, 0.8)',
      padding: '16px',
    },
    title: {
      color: '#D8E4D8',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      fontFamily: "'Roboto Mono', monospace",
      margin: 0,
    },
  };

  const images = [
    {
      url: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Previous Hackathon"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Team Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Winners Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Coding Session"
    }
  ];

  return (
    <div ref={galleryRef} style={styles.section} className="gallery-section">
      <div style={styles.container}>
        <h2 style={styles.heading}>Gallery</h2>
        <div style={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className="gallery-item" style={styles.galleryItem}>
              <img 
                src={image.url} 
                alt={image.title}
                style={styles.image}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={styles.overlay}>
                <h3 style={styles.title}>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;