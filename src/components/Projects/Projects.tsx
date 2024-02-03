import { useState, useRef } from "react";
import { projectBtns } from "../../types";
import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";
import Memories from "./Memories/Memories";
import SnakesAndLadders from "./SnakesAndLadders/SnakesAndLadders";
import "./Projects.css";
import Portfolio from "./Portfolio/Portfolio";

export default function Projects() {
  const [projectToShow, setProjectToShow] =
    useState<string>("snakes & ladders");

  const projects: projectBtns[] = ["snakes & ladders", "memories", "portfolio"];
  return (
    <div id="projects-section" className="projects-section">
      {/* <hr /> */}
      <SectionGroupButtons
        title="Projects"
        btns={projects}
        sectionId="projects-section"
        componentToShowState={projectToShow}
        selectedBtnClassName="selected-group-btn"
        setComponentToShowState={setProjectToShow}
      />

      <div className="projects-content">
        {projectToShow === "snakes & ladders" && <SnakesAndLadders />}
        {projectToShow === "memories" && <Memories />}
        {projectToShow === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
}
