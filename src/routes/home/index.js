import { h } from "preact";
import style from "./style.css";
import Sketch from "../../components/sketch";
import Project from "../../components/project";
import projects from "./projects";

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
    </div>
  );
};

export default Home;
