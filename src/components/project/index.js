import style from "./style.css";

const Project = (props) => {
  const { projectTitle, skillList, description, link } = props;
  return (
    <div class={style.projectContainer}>
      <a href={link}>
        <div class={style.projectTitle}>{projectTitle}</div>
        <div class={style.skills}>[{skillList.join(" | ")}]</div>
        <div class={style.description}>{description}</div>
      </a>
    </div>
  );
};

export default Project;
