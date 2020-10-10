import { h } from "preact";
import style from "./style.css";
import Sketch from "../../components/sketch";
import Project from "../../components/project";
import projects from "./projects";
import sketches from "./sketches";

const Home = () => {
  return (
    <div class="mainContentContainer">
      <div class={style.splash}>
        <Sketch />
      </div>
      <div class="sectionHeading">Projects</div>
      <div class={style.projectList}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
      <div class="sectionHeading">Sketches</div>
      <div class={style.projectList}>
        {sketches.map((sketch) => (
          <Project {...sketch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
