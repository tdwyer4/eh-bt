import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import "./IntroCards.scss";

export default function IntroCards() {
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card`}>
        <h3 className="">Why choose Executive?</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div
          className={`small-card light-card`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h3 className="num green">Stat 1</h3>
            <h2 className="sign green-sign"></h2>
          </div>
          <h4 className="">Explanation</h4>
        </motion.div>

        <motion.div
          className={`small-card light-card`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num place blue">Stat 2</h2>
          </div>
          <h4 className="">Explanation</h4>
        </motion.div>

        <motion.div
          className={`small-card light-card`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num purple">Stat 3</h2>
            <h2 className="sign purple-sign"></h2>
          </div>
          <h4 className="light-eyebrow">Explanation</h4>
        </motion.div>

        <motion.div
          className={`small-card light-card`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num red">Stat 4</h2>
            <h2 className="sign percent red-sign"></h2>
          </div>
          <h4 className="">Explanation</h4>
        </motion.div>
      </section>
    </div>
  );
}
