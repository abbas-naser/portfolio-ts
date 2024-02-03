import { useState, useRef } from "react";
import { aboutBtns } from "../../types";
import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";
import Skills from "./Skills/Skills";

import "./About.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Certifications from "./Certifications/Certifications";
export default function About() {
  const [aboutComponentToShow, setAboutComponentToShow] =
    useState<string>("skills");

  const btns: aboutBtns[] = [
    "skills",
    "education",
    "experience",
    "certifications",
  ];
  return (
    <div id="about-section" className="about-section">
      {/* btns group */}
      <SectionGroupButtons
        title="about me"
        btns={btns}
        sectionId="about-section"
        selectedBtnClassName="selected-group-btn"
        componentToShowState={aboutComponentToShow}
        setComponentToShowState={setAboutComponentToShow}
      />

      <div className="about-content">
        {aboutComponentToShow === "skills" && <Skills />}
        {aboutComponentToShow === "education" && <Education />}
        {aboutComponentToShow === "experience" && <Experience />}
        {aboutComponentToShow === "certifications" && <Certifications />}
      </div>
    </div>
  );
}
