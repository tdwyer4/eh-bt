import React, { useContext } from "react";
import { motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./AboutMe.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import CardCarousel from "../Carousel/CardCarousel";
import Timeline from "../Timeline/Timeline";

export default function AboutMe() {
  const cards = [
    {
      image:
        "https://www.executivehomes.com/static/media/OneHundredPlusLayoutsImage.02de467e8933a912438e.jpg",
      title: "Pick Your Lot ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://www.executivehomes.com/static/media/ThirdCustomizedLayoutDesktopImage.6128496f025be0b6b868.jpg",
      title: "Pick Your Floor Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://www.executivehomes.com/static/media/SideEntryGarageImage.bce2143d7780c333f826.png",
      title: "Choose Your Style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://www.executivehomes.com/static/media/FrontEntryGarageImage.5a14710d9ebc0d0a9d0b.png",
      title: "Select Your Upgrades",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://www.executivehomes.com/static/media/CottagesImage.bd1fe48687e47e05e37d.png",
      title: "Sign the Purchase Agreement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={`container-aboutme`}>
      <div className="anchor" id="about-me" />
      <motion.h3
        className={`start eyebrow`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Welcome to the Pre-Sold Home Building Process
      </motion.h3>
      <motion.h1
        className={`heading start`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Here's what happens from start to finish.
      </motion.h1>

      <CardCarousel cards={cards} />
      <IntroCards />
      <Showcase />
      <Timeline />
      {/* <EndCards /> */}
    </div>
  );
}
