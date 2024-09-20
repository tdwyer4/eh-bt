import React, { useRef, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import "./CardCarousel.scss";

interface CardCarouselProps {
  cards: { image: string; title: string; description: string }[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the carousel starts from the first card
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        ref={carouselRef}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {cards.map((card, index) => (
          <motion.div key={index} className="carousel-card">
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
