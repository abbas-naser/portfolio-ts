import { useState } from "react";
import { projectBtns } from "../../types";
import SectionGroupButtons from "../SectionGroupButtons/SectionGroupButtons";

import "./Projects.css";
export default function Projects() {
  const [projectToShow, setProjectToShow] = useState<string>("snakes&ladders");

  const projects: projectBtns[] = ["snakes & ladders", "memories"];
  return (
    <div id="projects">
      <SectionGroupButtons
        title="Projects"
        btns={projects}
        componentToShowState={projectToShow}
        selectedBtnClassName="selected-group-btn"
        setComponentToShowState={setProjectToShow}
      />
      <div className="projects-content">
        {projectToShow === "snakes&ladders" && <h1>SnakesAndLadders </h1>}
        {projectToShow === "memories" && <h1>Memories</h1>}
      </div>
    </div>
  );
}
