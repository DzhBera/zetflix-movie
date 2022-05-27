import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import clsx from "clsx";
import css from "./header.module.css";

function Header() {
  return (
    <header className={css.container}>
      <div className={css.header__content}>
        
        <Link className={css.header__logo}>
          Zet<span>flix</span>
        </Link>

        <nav>
          <ul>
            <li>
              <a class="film-filter" href="">
                Главная
              </a>
            </li>
            <li>
              <a class="film-filter" href="" data-type="FILM">
                Фильмы
              </a>
            </li>
            <li>
              <a class="film-filter" href="" data-type="MINI_SERIES">
                Сериалы
              </a>
            </li>
            <li>
              <a class="film-filter" href="" data-type="TV_SERIES">
                Мультфильмы
              </a>
            </li>
          </ul>
        </nav>

        <form action="">
            <input type="text" className={css.header__search} placeholder="Поиск" />

        </form>
      </div>
    </header>
  );
}

export default Header;
