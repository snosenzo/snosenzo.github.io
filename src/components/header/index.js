import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

function Header() {
  return (
    <header class={style.header}>
      <Link class={style.nameplate} href="/">
        Sam Nosenzo
      </Link>
      <Link class={style.about} href="/about">
        ?
      </Link>
    </header>
  );
}

export default Header;
