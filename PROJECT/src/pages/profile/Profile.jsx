import Posts from '../../components/posts/Posts'
import styles from './profile.module.css'

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.images}>
        <img className={styles.cover} src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <img className={styles.profilePic} src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.uInfo}>
          <div className={styles.left}>
            <a href="http://facebook.com">
              <span className='material-symbols-outlined'>
                face
              </span>
            </a>
            <a href="http://facebook.com">
              <span className='material-symbols-outlined'>
                face
              </span>
            </a>
            <a href="http://facebook.com">
              <span className='material-symbols-outlined'>
                public
              </span>
            </a>
            <a href="http://facebook.com">
              <span className='material-symbols-outlined'>
                public
              </span>
            </a>
            <a href="http://facebook.com">
              <span className='material-symbols-outlined'>
                public
              </span>
            </a>

          </div>
          <div className={styles.center}>
            <span className={styles.name}>Jane Doe</span>
            <div className={styles.info}>
              <div className={styles.item}>
                <span className='material-symbols-outlined logo'>flag</span>
                <span className={styles.nLogo}>Kenya</span>
              </div>
              <div className={styles.item}>
                <span className='material-symbols-outlined'>language</span>
                <span className={styles.nLogo}>taskify.dev</span>
              </div>
              
            </div>
            <button>Follow</button>
          </div>
          <div className={styles.right}>
            <span className='material-symbols-outlined'>email</span>
            <span className='material-symbols-outlined'>more_vert</span>
          </div>
        </div>
      <Posts />
      </div>
    </div>
  )
}

export default Profile