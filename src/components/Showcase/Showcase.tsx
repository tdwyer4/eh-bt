import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./Showcase.scss";

export default function Showcase() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.div
      className="container-showcase"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="showcase-left">
        <motion.h3
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          Did you know you can customize your floor plan?
        </motion.h3>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
      </div>

      <div className="showcase-right">
        <img
          className="screen"
          src={require("../../assets/images/screen5.png")}
        />
        <iframe
          className="video"
          src="https://www.executivehomes.com/static/media/ForYouDesktopVideo.2d7bfc50fe4b2040cd44.mp4"
          style={{
            border: "none",
            borderRadius: "2px",
            background: "cover",
          }}
          allow="autoplay loop"
        ></iframe>
      </div>
    </motion.div>
  );
}
