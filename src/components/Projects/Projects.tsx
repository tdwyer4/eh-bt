import React, { useContext } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import playAudio from "../../utils/helpers/playAudio";

export default function Projects() {
  return (
    <div className={`projects-container light-bg-1`}>
      <div className="anchor" id="portfolio" />
      <motion.h3
        className={`eyebrow light-eyebrow`}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      ></motion.h3>
      <motion.h1
        className={`heading light-heading`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      ></motion.h1>

      <div className="project-list">
        <a
          href="https://gianlucajahn.github.io/react-ecommerce-store/"
          className="ecom"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper ecom" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview1.PNG")}
          />
        </a>

        <a
          href="https://gianlucajahn.github.io/CV-Application/"
          className="cv"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper cv" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview4.PNG")}
          />
        </a>

        <a
          href="https://gianlucajahn.github.io/typescript-reddit-clone/"
          className="reddit lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower reddit" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview3.PNG")}
          />
        </a>

        <a
          href="https://gianlucajahn.github.io/macOS-react/"
          className="mac lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower mac" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={require("../../assets/images/preview2.PNG")}
          />
        </a>
      </div>

      <a
        href="https://github.com/gianlucajahn"
        target="_blank"
        className="more"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      ></a>
    </div>
  );
}
