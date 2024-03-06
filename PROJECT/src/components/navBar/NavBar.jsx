import { useContext } from 'react';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';

function NavBar() {

  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className={styles.logo}>Taskify</span>
        </Link>
        <span className="material-symbols-outlined">home</span>
        <span onClick={toggle} className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
        <span className="material-symbols-outlined">grid_view</span>
        <div className={styles.search}>
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className={styles.right}>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">email</span>
        <span className="material-symbols-outlined">notifications</span>
        <div className={styles.user}>
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>John Doe</span>
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default NavBar