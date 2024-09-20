import React, { useContext } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={`${state.darkmode ? "dark-nav" : "light-nav"}`}
    >
      {/* <img
        onClick={(e) => scroll("hero")}
        src={require("../../assets/images/icon.jpg")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      /> */}
      <h3
        className={`first ${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        PRE-SOLD
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("portfolio")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        EARLY CONSTRUCTION
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("skills")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        MID-CONSTRUCTION
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("resume")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        MOVE-IN READY
      </h3>
      {/* <button
        className="btn-nav"
        type="button"
        onClick={(e) => scroll("contact")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Kontakt" : "Contact"}
      </button> */}
    </motion.nav>
  );
}
