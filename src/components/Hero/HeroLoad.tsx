import React, { useContext, useRef, useState } from "react";
import "./Hero.scss";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import PreSoldPage from "../PhasePages/PreSold";
import EarlyConPage from "../PhasePages/EarlyCon";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const contentRef = useRef<HTMLDivElement | null>(null);

  function onSplineMouseDown(e: { target: { name: string } }) {
    console.log("Clicked target name:", e.target.name); // Debugging log
    if (e.target.name) {
      setCurrentContent(e.target.name);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }

  const renderContent = () => {
    switch (currentContent) {
      case "Pre":
      default:
        return <PreSoldPage />;
      case "Early":
        return <EarlyConPage />;
      case "Mid":
        return <PreSoldPage />;
      case "Ready":
        return <PreSoldPage />;
    }
  };

  return (
    <div className="appContainer">
      <div className="splineContainer">
        <Spline
          scene="https://prod.spline.design/22smEYy1Sly7sAoz/scene.splinecode"
          onSplineMouseDown={onSplineMouseDown}
        />
      </div>
      <div className="splineTrack" ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
