import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const styles = {
    navbar: {
      position: "fixed",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60%",
      maxWidth: "700px",
      background: "rgba(0, 0, 0, 0.2)", // Transparent effect
      backdropFilter: "blur(10px)", // Blur effect
     
      zIndex: 1000,
      display: "flex",
      justifyContent: "center", // Centers content inside navbar
      alignItems: "center",
      borderRadius: "10px",
      transition: "background 0.3s ease",
    },
    logo: {
      fontSize: "1.8rem",
      fontFamily: "'Black Ops One', cursive",
      color: "#fff",
      cursor: "pointer",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      marginRight: "auto",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "20px",
    },
    navItem: {
      fontSize: "1rem",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "color 0.3s ease",
    },
    menuToggle: {
      display: "none",
      cursor: "pointer",
      color: "#fff",
    },
    mobileMenu: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      background: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(10px)",
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      padding: "20px",
      borderRadius: "10px",
    },
  };

  return (
    <nav ref={navRef} style={styles.navbar}>
     

      <ul style={{ ...styles.navLinks, ...(isOpen ? styles.mobileMenu : {}) }}>
        <li style={styles.navItem} onClick={() => scrollToSection("about")}>
          About Us
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("timeline")}>
          Timeline
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("tracks")}>
          Tracks
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("prizes")}>
          Prizes
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("register")}>
          Register
        </li>
      </ul>

      {/* <div
        style={{ ...styles.menuToggle, display: "block" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </div> */}
    </nav>
  );
};

export default Navbar;
