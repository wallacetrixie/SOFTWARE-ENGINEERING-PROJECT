import { useState } from "react";
import styles from "./dashboard.module.css";
import PostForm from "../../components/postForm/PostForm";
import CatCard from "../../components/catCards/CatCard";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostJob = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    return <PostForm handlePost={handleCloseModal} />;
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.browse}>
        <span>Suggestions: </span>
        <a href=""> Web Mobile & Software Dev</a>
        <a href="">AI Services</a>
        <a href="">Design and Creative</a>
        <a href="">Writting</a>
        <a href="">More</a>
      </div>
      <div style={{ padding: "0rem 2rem" }}>
        <div className={styles.workspace}>
          <div className={styles.left}>
            <span>Your Workspace</span>
            <span>
              <a href="">All Jobs</a>
            </span>
            <span>
              <a href="">All Contracts</a>
            </span>
          </div>
          <div className={styles.right}>
            <button onClick={handlePostJob}>
              <span className="material-symbols-outlined">add</span>
              <span>Post Job</span>
            </button>
          </div>
        </div>
        <div className={styles.welcome}>
          <div className={styles.top}>
            <h2>Welcome Mary To Your Dashboard</h2>
            <span></span>
          </div>
          <div className={styles.bottom}>
            <div className={styles.leftDiv}>
              <span>RECOMMENDED FOR YOU</span>
              <div className={styles.details}>
                <div className={styles.info}>
                  <span></span>
                  <p>Get Matched with freelancers.</p>
                  <p>Create a brief and get paired</p>
                </div>
                <button>Check it out</button>
              </div>
            </div>
            <div className={styles.leftDiv}>
              <span>RECOMMENDED FOR YOU</span>
              <div className={styles.details}>
                <div className={styles.info}>
                  <span></span>
                  <p>Get Matched with freelancers.</p>
                  <p>Create a brief and get paired</p>
                </div>
                <button>Check it out</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.heading}>
            <h3>Popular Categories</h3>
          </div>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.menu}>
                <span>Manual Work</span>
                <hr />
                <menu>
                  <li>
                    <a href="">Painting</a>
                  </li>
                  <li>
                    <a href="">Repairs</a>
                  </li>
                  <li>
                    <a href="">Installation</a>
                  </li>
                </menu>
                <span>Online Work</span>
                <hr />
                <menu>
                  <li>
                    <a href="">Writting</a>
                  </li>
                  <li>
                    <a href="">Web Dev</a>
                  </li>
                  <li>
                    <a href="">Creative Design</a>
                  </li>
                </menu>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.cardsTop}>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </div>
              <div className={styles.cardsDiv}>
                <div className={styles.cards}>
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                  <CatCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && renderModalContent()}
      </div>
    </div>
  );
}

export default Dashboard;
