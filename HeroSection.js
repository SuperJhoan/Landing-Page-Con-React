import React from "react";

function HeroSection() {
  return (
    <div style={styles.hero}>
      <h1>A Warm Welcome!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, eligendi!</p>
      <button style={styles.button}>Call to action!</button>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
};

export default HeroSection;
