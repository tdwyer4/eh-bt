import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Timeline.module.scss";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "Meetings 'n stuff",
    title: "Plans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    date: "Let the chef cook!",
    title: "Markup Blueprints",
    description: "Description for event 2",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    date: "Via Skype version 1.6.2",
    title: "Virtual Pre-Construction Meeting",
    description: "Description for event 3",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    date: "Channel your inner artist",
    title: "Selections",
    description: "Description for event 4",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    date: "Not you though, we have crews a team for that",
    title: "Build",
    description: "Description for event 5",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
  {
    date: "Home sweet home",
    title: "Closing",
    description: "Description for event 5",
    image:
      "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
  },
];

const Timeline: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={styles.boxContainer}>
      <div className={styles.timelineContainer}>
        {/* Left Side: Hotspots */}
        <div className={styles.leftContainer}>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${
                selected === index ? styles.active : ""
              }`} // Conditional active class
              onClick={() => handleClick(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.date}</p>

                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      className={styles.paragraphText}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Optional paragraph content or additional details */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Image & Text Overlay */}
        <div className={styles.rightContainer}>
          {selected !== null && (
            <motion.div
              key={selected}
              className={styles.imageContainer}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={timelineItems[selected].image}
                alt={timelineItems[selected].title}
              />
              <div className={styles.overlayText}>
                <p>{timelineItems[selected].description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
