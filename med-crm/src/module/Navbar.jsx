import styles from "./Navbar.module.scss";
import * as IMG from "../components/images/7.jpg";
import NavbarMenu from "./NavbarMenu/Navbar_Menu.jsx";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarRow}>
          <a href="#">
            <img className={styles.imgLogo} src={IMG.default} width={200} />
          </a>
          <NavbarMenu />
          <button type="button">Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
