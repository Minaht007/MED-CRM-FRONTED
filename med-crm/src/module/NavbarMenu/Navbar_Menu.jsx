import { Component } from "react";
import styles from "./Navbar-menu.module.scss";

class NavbarMenu extends Component {
  render() {
    return (
      <ul className={styles.menu}>
        <li className={styles.menuList}>
          <input
            className={
              styles.mainMenuLink
                ? styles.mainMenuLink
                : styles.mainMenuLink.active
            }
            type="form"
            placeholder={"name"}
            width={100}
          />
        </li>
        <li className={styles.menuList}>
          <input
            className={
              styles.mainMenuLink
                ? styles.mainMenuLink
                : styles.mainMenuLink.active
            }
            type="form"
            placeholder={"phone"}
            width={100}
          />
        </li>
        <li className={styles.menuList}>
          <input
            className={
              styles.mainMenuLink
                ? styles.mainMenuLink
                : styles.mainMenuLink.active
            }
            type="form"
            placeholder={"email"}
            width={100}
          />
        </li>
      </ul>
    );
  }
}

export default NavbarMenu;
