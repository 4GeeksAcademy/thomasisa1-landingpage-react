import React from 'react';
import Card from './Card';

const CardsSection = () => {
  const cardsInfo = [
    { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", buttonText: "Find Out More!" },
    { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", buttonText: "Find Out More!" },
    { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", buttonText: "Find Out More!" },
    { title: "Card title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", buttonText: "Find Out More!" }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cardsInfo.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} buttonText={card.buttonText} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;