import { h } from "preact";
import SafeLink from "../safe-link";
import style from "./style.css";

function Footer() {
  return (
    <div class={style.footer}>
      <SafeLink href="https://github.com/snosenzo">Github</SafeLink>
      <div>|</div>
      <SafeLink href="https://linkedin.com/in/samnosenzo">LinkedIn</SafeLink>
      <div>|</div>
      <SafeLink href="https://twitter.com/samnosenzo">Twitter</SafeLink>
      <div>|</div>
      <SafeLink href="https://www.instagram.com/n_senz_/">Instagram</SafeLink>
      <div>|</div>
      <SafeLink href="https://www.are.na/sam-nosenzo">Are.na</SafeLink>
    </div>
  );
}

export default Footer;
