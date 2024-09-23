import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/images/github-mark.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/whatsapp.svg";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.scss";
import playAudio from "../../utils/helpers/playAudio";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("gianluca.jahn98@gmail.com");
    {
      /* toast(state.language === "english" ? "E-Mail kopiert!" : "Copied E-Mail!", {
      icon: "📧",
      position: "top-left",
      style: {
        border: "2px solid hsla(0,0%,51.4%,.16)",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: "white",
        fontSize: "14px",
        backgroundColor: "#141414",
      },
    }); */
    }
  };

  return (
    <div className="contact-container">
      <div className="anchor" id="contact" />
      <motion.h3
        className="eyebrow"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      ></motion.h3>
      <motion.h1
        className="heading"
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      ></motion.h1>

      <p className=""></p>

      <div className="contact-data">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <ContactForm />
        </motion.div>

        <motion.section
          className={`contact-socials-container light-card light-shadow`}
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gianlucajahn/"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button className={`contact-socials-item linkedin`}>
              <LinkedIn className={`svg light-svg`} />
              LinkedIn
            </button>
          </a>

          <a
            target="_blank"
            href="https://github.com/gianlucajahn"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button className={`contact-socials-item github dark-field`}>
              <GitHub className={`svg light-svg`} />
              GitHub
            </button>
          </a>

          <a
            target="_blank"
            href="https://twitter.com/GianlucaJahn"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button className={`contact-socials-item twitter dark-field`}>
              <Twitter className={`svg light-svg`} />
              Twitter
            </button>
          </a>

          <a
            target="_blank"
            href="https://wa.me/+4915233760445"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button className={`contact-socials-item whatsapp dark-field`}>
              <WhatsApp className={`svg light-svg`} />
              WhatsApp
            </button>
          </a>

          <button
            className="email"
            onClick={copyEmail}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          ></button>
        </motion.section>
      </div>
    </div>
  );
}
