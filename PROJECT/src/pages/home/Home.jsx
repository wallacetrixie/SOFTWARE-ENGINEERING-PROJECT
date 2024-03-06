import React, { useState, useEffect } from 'react';
import styles from './home.module.css'

function Home() {

    const [active, setActive] = useState(`${styles.menuItems}`)
    const [cname, setCname] = useState('fas fa-bars')
    const navToggle = () => {
        active == `${styles.menuItems}` ? setActive(`${styles.menuItems} ${styles.navActive}`) : setActive(`${styles.menuItems}`);
        cname == 'fas fa-bars' ? setCname('fas fa-close') : setCname('fas fa-bars');
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.section}>
                    {/* <div className={styles.logo}>
                        <span>Taskify</span>
                    </div> */}
                    <nav className={styles.nav} id='main'>
                        <a href="#" className={styles.brand}>Taskify</a>
                        <menu className={active}>

                            <li>
                                <a href="#" className={styles.customLink}><i className="fas fa-home"></i> Login</a>
                            </li>
                            <li>
                                <a href="#" className={styles.customLink}><i className="fas fa-envelope"></i> Contact us</a>
                            </li>
                            <li>
                                <a href="#" className={styles.customLink}><i className="fas fa-users"></i> Follow us</a>
                            </li>
                            <li>
                                <a href="#" className={styles.customLink}><i className="fas fa-info-circle"></i> About us</a>
                            </li>
                            <li>
                                <a href="#" className={styles.customLink}><i className="fas fa-cogs"></i> Our service</a>

                            </li>
                        </menu>
                        <div onClick={navToggle} className={styles.menuToggle} id='menu-toggle'>
                            <i className={cname}></i>
                        </div>
                    </nav>
                </div>
                <div className={styles.join}>
                    <p className={styles.ex}>Join Us Today</p>
                    <p className={styles.ex}>and become</p>
                    <p className={styles.ex}>part of a great community</p>
                </div>
                <div className={styles.arrowContainer}>
                    <a href="#section1" className="scroll-down">
                        <div className={styles.arrow}></div>
                    </a>
                </div>
            </div>
            <div className={styles.categories}>
                <div className={styles.SER}>
                    <p className={styles.des}>Our Services</p>
                </div>
                <div className={styles.divCard}>

                    {/* Cards go here */}
                    <div className={styles.card}>
                        <img src="/python.jpeg" />
                        <h2 className={styles.courseTitle}>Software Development</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>
                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/ws.jpeg" />
                        <h2 className={styles.courseTitle}>Academic Research</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>

                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/ai.jpeg" />
                        <h2 className={styles.courseTitle}>Manual Labour</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/data.jpeg" />
                        <h2 className={styles.courseTitle}>Graphic Design</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/db.jpeg" />
                        <h2 className={styles.courseTitle}>Online Marketting</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/d.jpeg" />
                        <h2 className={styles.courseTitle}>Data Management</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/v.jpg" />
                        <h2 className={styles.courseTitle}>Virual Assistance</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/c.png" />
                        <h2 className={styles.courseTitle}>Content creation</h2>
                        <a href="#" className={styles.enrollBtn}><i className="fas fa-graduation-cap"></i> View</a>

                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                    </div>
                </div>
                <button className={styles.show}>
                    Show More
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>

            <div className={styles.steps}>

                {/* Steps section */}
                <div className={styles.description}>
                    <p><i className="fas fa-info-circle"></i> How it all works</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="2.jpeg" alt="Person working on a laptop" />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.step}>
                        <div className={styles.circle}><i className="fas fa-user-plus"></i></div>
                        <div className={styles.text}>
                            <h3>Create Your Account</h3>
                            <p>Sign up with your information to get started.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.circle}><i className="fas fa-sign-in-alt"></i></div>
                        <div className={styles.text}>
                            <h3>Log In</h3>
                            <p>Enter your credentials to access your account.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.circle}><i className="fas fa-user-edit"></i></div>
                        <div className={styles.text}>
                            <h3>Complete Your Profile</h3>
                            <p>Provide additional details to enhance your profile.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.testimonials}>
                {/* Testimonials section */}
                <div className={styles.head}>
                    <p className={styles.Test}>
                        Our Success stories <br />
                        <i className="fas fa-award" id="medal"></i>
                    </p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src="6.jpg" alt="Profile Picture" />
                        <h3>Wallace Wambulwa</h3>
                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                        <p>Joining this platform really changed my life positively. I've found tremendous support and opportunities
                            that I never thought possible.
                            i am grateful</p>
                        <i className="fas fa-thumbs-up" id="thumbs-up"></i>

                    </div>
                    <div className={styles.card}>
                        <img src="0.jpg" alt="Profile Picture" />
                        <h3>Trixie mellow</h3>
                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                        <p>This platform has been a game-changer for me. The resources and community here have empowered me to make
                            a real difference in the lives of others.</p>
                        <i className="fas fa-thumbs-up" id="thumbs-up"></i>

                    </div>
                    <div className={styles.card}>
                        <img src="6.jpg" alt="Profile Picture" />
                        <h3>John omondi</h3>
                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                        <p>Being part of this platform has opened my eyes to new possibilities. I've learned so much and have been
                            inspired to pursue my dreams with confidence.</p>
                        <i className="fas fa-thumbs-up" id="thumbs-up"></i>
                    </div>
                    <div className={styles.card}>
                        <img src="7.jpg" alt="Profile Picture" />
                        <h3>Maxwel otis</h3>
                        <div className={styles.ratings}>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                            <i className={`fas fa-star ${styles.ratingStar}`}></i>
                        </div>
                        <p>Exploring this platform has been a delightful experience. I've encountered valuable insights and
                            connections that have enriched my journey towards success.</p>
                        <i className="fas fa-thumbs-up" id="thumbs-up"></i>
                    </div>
                </div>
            </div>

            <footer>
                <div className={styles.f}>
                    <div className={styles.footerContainer}>
                        <div className={styles.footerSection}>
                            <h3>About Us</h3>
                            <ul>
                                <li><a href="#">Teardown</a><i className=""></i></li>
                                <li><a href="#">Blogs</a><i className=""></i></li>
                                <li><a href="#">Partners</a><i className=""></i></li>
                            </ul>
                        </div>
                        <div className={styles.footerSection}>
                            <h3>Social</h3>
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube"></i> Youtube</a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerSection}>
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">Contact Us</a><i className=""></i></li>
                                <li><a href="#">Download Center</a><i className=""></i></li>
                                <li><a href="#">Feedback</a><i className=""></i></li>
                            </ul>
                        </div>
                        <div className={styles.footerSection}>
                            <h3>Community</h3>
                            <ul>
                                <li><a href="#">Influencers</a><i className=""></i></li>
                                <li><a href="#">Giveaways</a><i className=""></i></li>
                            </ul>
                        </div>
                        <div className={styles.footerSection}>
                            <h3>Stay Updated</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="Enter your email" className={styles.foot} />
                                <button className={styles.subscribe} type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>Copyright© 2024 Wallace. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Home;
