import React, { useContext } from "react";
import "./Skills.scss";
import SkillTab from "../SkillTab/SkillTab";

export default function Skills() {
  return (
    <div className={`skills-container light-bg-2`}>
      <div className="anchor" id="skills" />
      <h3 className={`eyebrow light-eyebrow`}>Skills</h3>
      <h1 className={`heading light-heading`}></h1>

      <div className="skill-grid">
        <div className="skill-grid-first-row">
          <SkillTab topic="languages" />
        </div>
        <div className="skill-grid-second-row">
          <SkillTab topic="frameworks" />
          <SkillTab topic="libraries" />
        </div>
        <div className="skill-grid-third-row">
          <SkillTab topic="collaborative" />
          <SkillTab topic="prototyping" />
          <SkillTab topic="code" />
        </div>
      </div>
    </div>
  );
}
