import styles from './post.module.css'
import Comments from '../comments/Comments'
import { Link } from 'react-router-dom'
import { useState } from 'react';


function Post({ post }) {
    const [commentOpen, setCommentOpen] = useState(false);


    const liked = false;

    return (
        <div className={styles.post}>
            <div className={styles.container}>
                <div className={styles.user}>
                    <div className={styles.userInfo}>
                        <img src={post.profilePic} alt="" />
                        <div className={styles.details}>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className={styles.name}>{post.name}</span>
                            </Link>
                            <span className={styles.date}> 1 min ago</span>
                        </div>
                    </div>
                    <span className='material-symbols-outlined'>more_horiz</span>
                </div>
                <div className={styles.content}>
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.item}>
                        <span className={`material-symbols-outlined ${liked ? 'liked' : ''}`}>handshake</span>
                        Get gig
                    </div>
                    <div onClick= {() => setCommentOpen(!commentOpen)}className={styles.item}>
                        <span className='material-symbols-outlined'>comment</span>
                        Add suggestion
                    </div>
                    <div className={styles.item}>
                        <span className='material-symbols-outlined'>share</span>
                        Share
                    </div>
                </div>
                
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post