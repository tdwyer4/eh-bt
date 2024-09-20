import React, { useContext } from "react";
import "./Manifest.scss";
import { motion, useTransform } from "framer-motion";
import { store } from "../../App";

export default function Manifest() {
  const [state, dispatch] = useContext(store);

  return (
    <div
      className={`container-manifest ${
        state.darkmode ? "dark-bg-1" : "light-bg-1"
      }`}
    >
      <motion.a
        className="manifest"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1>
          Executive Homes.
          <br />
          Building Distinction
          <br />
          Since 2010.
        </h1>
      </motion.a>
    </div>
  );
}
