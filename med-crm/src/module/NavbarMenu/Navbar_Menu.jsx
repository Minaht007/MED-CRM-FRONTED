import { Component } from "react";
import styles from "./Navbar-menu.module.scss";

class NavbarMenu extends Component {
  render() {
    return (
      <ul className={styles.menu}>
        <li>
          <a href="#" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Books
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Contacts
          </a>
        </li>
      </ul>
    );
  }
}

export default NavbarMenu;
