import React from "react";

function Card({ title, description, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt="Card" style={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    textAlign: "center",
    margin: "1rem",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default Card;
