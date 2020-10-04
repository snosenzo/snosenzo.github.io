import { useState } from "preact/hooks";
import style from "./style.css";

const Project = (props) => {
  const { projectTitle, skillList, description, link, imageSrc } = props;
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      class={style.projectContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isHovered && <img src={imageSrc} />}
      <a href={link}>
        {isHovered && <div class={style.symbol}>&#8599;</div>}
        <div class={style.projectTitle}>{projectTitle}</div>
        <div class={style.skills}>[{skillList.join(" | ")}]</div>
        <div class={style.description}>{description}</div>
      </a>
    </div>
  );
};

export default Project;
