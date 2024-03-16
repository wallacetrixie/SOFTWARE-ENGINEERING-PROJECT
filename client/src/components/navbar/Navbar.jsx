import { useContext, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import Info from "../info/Info";

function NavBar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [toggleProfile, setToggleProfile] = useState(false);
  const profileclick = () => setToggleProfile(t => !toggleProfile);
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className={styles.logo}>Taskify</span>
        </Link>
        <menu className={styles.menuItems}>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Talent</a>
          </li>
          <li>
            <a href="">Hire</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </menu>
        <div className={styles.search}>
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search category..." />
        </div>
      </div>
      <div className={styles.right}>
        <span onClick={toggle} className="material-symbols-outlined">
          {darkMode ? "light_mode" : "dark_mode"}
        </span>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">email</span>
        <span className="material-symbols-outlined">notifications</span>
        <div onClick={profileclick} className={styles.user}>
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          {toggleProfile && <Info />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
