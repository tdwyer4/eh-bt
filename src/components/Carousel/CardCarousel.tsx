import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CardCarousel.scss";

interface CardCarouselProps {
  cards: { image: string; title: string; description: string }[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState<number>(0);

  useEffect(() => {
    // Ensure the carousel starts from the first card
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  // Function to handle scrolling to the next card when a card is clicked
  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / cards.length;
      const scrollAmount = cardWidth * index;

      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentCard(index);
    }
  };

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel"
        ref={carouselRef}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`carousel-card ${currentCard === index ? "active" : ""}`}
            onClick={() => scrollToCard(index)}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardCarousel;
