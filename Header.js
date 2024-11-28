import React from "react";

function Header() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Start Bootstrap</h1>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#343a40",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
  },
};

export default Header;
