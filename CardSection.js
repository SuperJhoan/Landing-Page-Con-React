import React from "react";
import Card from "./Card";

function CardSection() {
  const cardData = [
    { title: "Card 1", description: "This is the first card", image: "https://via.placeholder.com/500x325" },
    { title: "Card 2", description: "This is the second card", image: "https://via.placeholder.com/500x325" },
    { title: "Card 3", description: "This is the third card", image: "https://via.placeholder.com/500x325" },
  ];

  return (
    <div style={styles.cardSection}>
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
}

const styles = {
  cardSection: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "2rem",
  },
};

export default CardSection;
