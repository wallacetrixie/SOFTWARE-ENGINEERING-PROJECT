import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.image}>
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={styles.title}>
            <span>Hey Mary.</span>
          </div>
        </div>
        <hr />
        <div className={styles.body}>
          <div className={styles.options}>
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </div>
          <div className={styles.options}>
            <span className="material-symbols-outlined">notifications</span>
            <span>Notification</span>
          </div>
          <div className={styles.options}>
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </div>
        </div>
        <hr />
        <div className={styles.footer}>
          <div className={styles.options}>
            <span className="material-symbols-outlined">help</span>
            <span>Help and Support</span>
          </div>
          <div className={styles.options}>
            <span className="material-symbols-outlined">logout</span>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
