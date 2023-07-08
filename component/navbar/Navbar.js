import styles from "./Navbar.module.css";
import Image from "next/image";
import logoPicture from "../../public/logo.png";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className={styles["nav-bar"]}>
          <li className={styles.logo}>
            <a href="#">
              <Image src={logoPicture} alt="logo" />
            </a>
          </li>
          <div className={styles.menu}>
            <li>
              <a href="#">
                ÜBER UNS<i className={styles["fas fa-caret-down"]}></i>
              </a>
              <div className={styles["dropdown-menu"]}>
                <ul>
                  <li>
                    <a href="#">UNSERE GESCHICHTE</a>
                  </li>
                  <li>
                    <a href="#">DIE STIFTUNG</a>
                  </li>
                  <li>
                    <a href="#">AWARDS</a>
                  </li>
                  <li>
                    <a href="#">JAHRESBERICHT</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">ACADEMY / BOTSCHAFTER</a>
            </li>
            <li>
              <a href="#">
                FÖRDERUNG<i className={styles["fas fa-caret-down"]}></i>
              </a>
              <div className={styles["dropdown-menu"]}>
                <ul>
                  <li>
                    <a href="#">FÖRDER-PROGRAMME</a>
                  </li>
                  <li>
                    <a href="#">FÖRDER-MÖGLICHKEITE</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                ORGANISATION<i className={styles["fas fa-caret-down"]}></i>
              </a>
              <div className={styles["dropdown-menu"]}>
                <ul>
                  <li>
                    <a href="#">TEAM</a>
                  </li>
                  <li>
                    <a href="#">VORSTAND</a>
                  </li>
                  <li>
                    <a href="#">PARTNER</a>
                  </li>
                  <li>
                    <a href="#">JOBS</a>
                  </li>
                  <li>
                    <a href="#">KONTAKT</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                NEWS<i className={styles["fas fa-caret-down"]}></i>
              </a>
              <div className={styles["dropdown-menu"]}>
                <ul>
                  <li>
                    <a href="#">AKTUELLES</a>
                  </li>
                  <li>
                    <a href="#">SOCIAL MEDIA</a>
                  </li>
                  <li>
                    <a href="#">LAUREUS NEWSLETTER</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                SPENDEN<i className={styles["fas fa-caret-down"]}></i>
              </a>
              <div className={styles["dropdown-menu"]}>
                <ul>
                  <li>
                    <a href="#">SPORTS FOR GOOD</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">PODCAST</a>
            </li>
            <li>
              <a href="#">PRESSE</a>
            </li>
            <li>
              <a href="#">
                <i className={styles["fa fa-search"]}></i>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
