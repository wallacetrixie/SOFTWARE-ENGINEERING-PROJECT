import React, { useState,useEffect} from 'react';

function Home() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        const main = document.querySelector('.main');
        const handleMenuToggle = () => {
            main.classList.toggle('menu-open');
        };

        menuToggle.addEventListener('click', handleMenuToggle);
        return () => {
            menuToggle.removeEventListener('click', handleMenuToggle);
        };
    }, []);
    
    return (
    <div className="main">
             <div className={`main ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="menu-items">
                <a href="#" className="custom-link login"><i className="fas fa-home"></i> Login</a>
                <a href="#" className="custom-link contact"><i className="fas fa-envelope"></i> Contact us</a>
                <a href="#" className="custom-link follow"><i className="fas fa-users"></i> Follow us</a>
                <a href="#" className="custom-link about"><i className="fas fa-info-circle"></i> About us</a>
                <a href="#" className="custom-link services"><i className="fas fa-cogs"></i> Our service</a>
            </div>
            <div className="menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </div>

            <div className="join">
                <p className="ex">Join Us Today</p>
                <p className="ex">and become</p>
                <p className="ex">part of a great community</p>
            </div>
            <div className="arrow-container">
                <a href="#section1" className="scroll-down">
                    <div className="arrow"></div>
                </a>
            </div>

            <div className="categories">
                <div className="SER">
                    <p className="des">Our services</p>
                </div>
                <div className="div-card">

                    {/* Cards go here */}
                     <div class="card">
                    <img src="public/python.jpeg" />
                    <h2 class="course-title">Software Development</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                
                <div class="card">
                    <img src="public/ws.jpeg" />
                    <h2 class="course-title">Academic Research</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                
                    </div>
                </div>
                
                <div class="card">
                    <img src="public/ai.jpeg" />
                    <h2 class="course-title">Manual Labour</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="public/data.jpeg" />
                    <h2 class="course-title">Graphic Design</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="public/db.jpeg" />
                    <h2 class="course-title">Online Marketting</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="public/d.jpeg" />
                    <h2 class="course-title">Data Management</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="public/v.jpg" />
                    <h2 class="course-title">Virual Assistance</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="public/c.png" />
                    <h2 class="course-title">Content creation</h2>
                    <a href="#" class="enroll-btn"><i class="fas fa-graduation-cap"></i> View</a>
                
                    <div class="ratings">
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                        <i class="fas fa-star rating-star"></i>
                    </div>
                </div>
                </div>
                <div className="show">
                    Show All
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className="steps">

                {/* Steps section */}
                <div class="description">
            <p><i class="fas fa-info-circle"></i> How it all works</p>
        </div>
        <div class="image-container">
            <img src="2.jpeg" alt="Person working on a laptop"/>
        </div>
        <div class="content-container">
            <div class="step">
                <div class="circle"><i class="fas fa-user-plus"></i></div>
                <div class="text">
                    <h3>Create Your Account</h3>
                    <p>Sign up with your information to get started.</p>
                </div>
            </div>
            <div class="step">
                <div class="circle"><i class="fas fa-sign-in-alt"></i></div>
                <div class="text">
                    <h3>Log In</h3>
                    <p>Enter your credentials to access your account.</p>
                </div>
            </div>
            <div class="step">
                <div class="circle"><i class="fas fa-user-edit"></i></div>
                <div class="text">
                    <h3>Complete Your Profile</h3>
                    <p>Provide additional details to enhance your profile.</p>
                </div>
            </div>
        </div>
            </div>

            <div className="testimonials">
                {/* Testimonials section */}
                <div class="head">
            <p className="Test">
            Our Success stories <br />
            <i className="fas fa-award" id="medal"></i>
        </p>
        </div>
        <div class="cards">
            <div class="card">
                <img src="6.jpg" alt="Profile Picture"/>
                <h3>Wallace Wambulwa</h3>
                <div class="ratings">
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                </div>
                <p>Joining this platform really changed my life positively. I've found tremendous support and opportunities
                    that I never thought possible.
                i am grateful</p>
                <i class="fas fa-thumbs-up" id="thumbs-up"></i>
                
            </div>
            <div class="card">
                <img src="0.jpg" alt="Profile Picture"/>
                <h3>Trixie mellow</h3>
                <div class="ratings">
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                </div>
                <p>This platform has been a game-changer for me. The resources and community here have empowered me to make
                    a real difference in the lives of others.</p>
                <i class="fas fa-thumbs-up" id="thumbs-up"></i>
                
            </div>
            <div class="card">
                <img src="6.jpg" alt="Profile Picture"/>
                <h3>John omondi</h3>
                <div class="ratings">
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                </div>
                <p>Being part of this platform has opened my eyes to new possibilities. I've learned so much and have been
                    inspired to pursue my dreams with confidence.</p>
            <i class="fas fa-thumbs-up" id="thumbs-up"></i>
            </div>
            <div class="card">
                <img src="7.jpg" alt="Profile Picture"/>
                <h3>Maxwel otis</h3>
                <div class="ratings">
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                    <i class="fas fa-star rating-star"></i>
                </div>
                <p>Exploring this platform has been a delightful experience. I've encountered valuable insights and
                    connections that have enriched my journey towards success.</p>
                <i class="fas fa-thumbs-up" id="thumbs-up"></i>
                    </div>
            </div>
        </div>

        <footer>
    <div className="f">
        <div className="footer-container">
            <div className="footer-section">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">Teardown</a><i className=""></i></li>
                    <li><a href="#">Blogs</a><i className=""></i></li>
                    <li><a href="#">Partners</a><i className=""></i></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Social</h3>
                <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i> Youtube</a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Contact Us</a><i className=""></i></li>
                    <li><a href="#">Download Center</a><i className=""></i></li>
                    <li><a href="#">Feedback</a><i className=""></i></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Community</h3>
                <ul>
                    <li><a href="#">Influencers</a><i className=""></i></li>
                    <li><a href="#">Giveaways</a><i className=""></i></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Stay Updated</h3>
                <form action="#">
                    <input type="email" name="email" placeholder="Enter your email" className="foot" />
                    <button className="subscribe" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright© 2024 Wallace. All rights reserved.</p>
        </div>
    </div>
</footer>

    
</div>
    );
}

export default Home;
