import styles from './leftBar.module.css'

function LeftBar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <span>Profile</span>
          <div className={styles.user}>
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>John Doe</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">person</span>
            <span>Account</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">email</span>
            <span>Messages</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">Notifications</span>
            <span>Notifications</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Your Shortcuts</span>
          {/* <div className={styles.item}>
            <span className="material-symbols-outlined">event</span>
            <span>Events</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">sports_esports</span>
            <span>Gaming</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">gallery_thumbnail</span>
            <span>Gallery</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">switch_video</span>
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">message</span>
            <span>Messages</span>
          </div> */}
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Others</span>
          <div className={styles.item}>
            <span className="material-symbols-outlined">help</span>
            <span>Help and support</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">follow_the_signs</span>
            <span>Log Out</span>
          </div>
          {/* <div className={styles.item}>
            <span className="material-symbols-outlined">gallery_thumbnail</span>
            <span>Gallery</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">switch_video</span>
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">message</span>
            <span>Messages</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LeftBar