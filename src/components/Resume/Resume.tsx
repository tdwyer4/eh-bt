import React, { useContext } from "react";
import "./Resume.scss";
import { motion } from "framer-motion";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import { ReactComponent as Contact } from "../../assets/images/contact.svg";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

export default function Resume() {
  return (
    <div className={`resume-container light-bg-1`}>
      <div className="anchor" id="resume" />
      <motion.h3
        className={`eyebrow light-eyebrow`}
        initial={{ y: 350 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      ></motion.h3>
      <motion.h1
        className="heading"
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      ></motion.h1>

      <div className="resume-box">
        <div className="resume-box-left">
          <img className="cta" src={require("../../assets/images/cta.png")} />
        </div>

        <div className="resume-box-right">
          <p></p>
          <a
            download="cv_gianlucajahn.pdf"
            href={require("../../assets/documents/cv_gianlucajahn_german.pdf")}
          >
            <button
              className="download"
              onMouseDown={playAudio}
              onMouseUp={playAudio}
            >
              <Download
                className="download-svg svg"
                style={{ height: "22px" }}
              />
              Download CV
            </button>
          </a>

          <button
            className="contact"
            onClick={(e) => scroll("contact")}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <Contact className="contact-svg svg" style={{ height: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
