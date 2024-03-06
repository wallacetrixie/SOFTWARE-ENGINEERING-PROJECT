import Posts from '../../components/posts/Posts'
import styles from './landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      
      <Posts />
    </div>
  )
}

export default Landing