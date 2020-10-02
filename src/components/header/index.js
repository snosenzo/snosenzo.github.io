import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

function Header() {
  return (
    <header class={style.header}>
      <Link class={style.nameplate} activeClassName={style.active} href="/">
        Sam Nosenzo
      </Link>
      <Link class={style.about} activeClassName={style.active} href="/about">
        ?
      </Link>
    </header>
  );
}

export default Header;
