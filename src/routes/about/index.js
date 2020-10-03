import style from "./style.css";
import SafeLink from "../../components/safe-link";

const About = () => {
  console.log(style);
  return (
    <div class="mainContentContainer">
      <div class="sectionHeading">About</div>
      <div class={style.about}>
        <div class={style.description}>
          Software developer and generative artist based in Pittsburgh, PA
        </div>
        <p>
          Currently a software engineer working on map-based applications at
          Uber ATG. Pursuing personal generative projects using{" "}
          <SafeLink href="https://www.p5js.org">p5.js</SafeLink>. Recently
          exploring{" "}
          <SafeLink href="https://twitter.com/SamNosenzo/status/1227116031115747328?s=20">
            polygon line-fill/hatching methods
          </SafeLink>{" "}
          for pen-plotting.
        </p>
        <p>Always looking for creative opportunities and projects!</p>
        <p>Feel free to reach out</p>
      </div>
      <div class={`${style.about} ${style.socials}`}>
        <SafeLink href="https://github.com/snosenzo">Github</SafeLink>
        <SafeLink href="https://linkedin.com/in/samnosenzo">LinkedIn</SafeLink>
        <SafeLink href="https://twitter.com/samnosenzo">Twitter</SafeLink>
        <SafeLink href="https://www.instagram.com/n_senz_/">Instagram</SafeLink>
        <SafeLink href="https://www.are.na/sam-nosenzo">Are.na</SafeLink>
      </div>
    </div>
  );
};

export default About;