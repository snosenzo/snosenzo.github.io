import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

function Header() {
  return (
    <header class={style.header}>
      <div class={style.nameplate}>
        <div>Sam Nosenzo</div>
        <div class={style.nameplateSubtitle}>
          Frontend/Creative Developer/Engineer
        </div>
      </div>
      <Link
        class={`${style.link} ${style.home}`}
        activeClassName={style.active}
        href="/"
      >
        &#8962;
      </Link>
      <Link
        class={`${style.link} ${style.about}`}
        activeClassName={style.active}
        href="/about"
      >
        About
      </Link>
    </header>
  );
}

export default Header;
