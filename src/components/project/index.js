import { useState } from "preact/hooks";
import SafeLink from "../safe-link";
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
      <SafeLink href={link}>
        {isHovered && <div class={style.symbol}>&#8599;</div>}
        <div class={style.projectTitle}>{projectTitle}</div>
        {skillList && <div class={style.skills}>[{skillList.join(" | ")}]</div>}
        <div class={style.description}>{description}</div>
      </SafeLink>
    </div>
  );
};

export default Project;
