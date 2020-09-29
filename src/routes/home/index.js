import { h } from "preact";
import style from "./style.css";
import Sketch from "../../components/sketch";
import Project from "../../components/project";
import projects from "./projects";
import { useWindowSize } from "../../hooks";

const Home = () => {
  const { width, height } = useWindowSize();
  return (
    <div class={style.home}>
      <div class={style.splash}>
        <Sketch />
      </div>
      <div class={style.sectionHeading}>Projects</div>
      <div class={style.projectList}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
