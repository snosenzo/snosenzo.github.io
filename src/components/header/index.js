import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>Sam Nosenzo</h1>
        <nav>
          <Link activeClassName={style.active} href="/">
            ?
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
