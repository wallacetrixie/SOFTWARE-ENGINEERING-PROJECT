import styles from './comments.module.css'

function Comments() {
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
            name: "Jane Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
            name: "Jane Doe",
            userId: 3,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 4,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
            name: "Jane Doe",
            userId: 4,
            profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ]
  return (
    <div className={styles.comments}>
        <div className={styles.write}>
            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <input type="text" name="" id="" placeholder='Write a comment...' />
            <button>Send</button>
        </div>
        {comments.map((comment) => (
            <div className={styles.comment}>
                <img src={comment.profilePic} alt="" />
                <div className={styles.info}>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className={styles.date}>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments