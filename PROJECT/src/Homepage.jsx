function Home(props) {
    return (
        <div className="main">
            <div className="menubar">
                <a href="#" className="custom-link login"><i className="fas fa-home"></i> Login</a>
                <a href="#" className="custom-link contact"><i className="fas fa-envelope"></i> Contact us</a>
                <a href="#" className="custom-link follow"><i className="fas fa-users"></i> Follow us</a>
                <a href="#" className="custom-link about"><i className="fas fa-info-circle"></i> About us</a>
                <a href="#" className="custom-link services"><i className="fas fa-cogs"></i> Our service</a>
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
                {/* First card */}
                <div className="card">
                    <img src="/public/python.jpeg" />
                    <h2 className="course-title">Software Development</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                {/* Repeat the card format */}
                <div className="card">
                    <img src="public/web.jpeg"/>
                    <h2 className="course-title">Academic Research</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        
                    </div>
                </div>
                {/* Repeat the card format for other categories */}
                <div className="card">
                    <img src="public/ai.jpeg"/>
                    <h2 className="course-title">Manual Labour</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src="/public/data.jpeg"/>
                    <h2 className="course-title">Graphic Design</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src="public/db.jpeg"/>
                    <h2 className="course-title">Online Marketting</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src="public/data.jpeg"/>
                    <h2 className="course-title">Software Development</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src="public/python.jpeg"/>
                    <h2 className="course-title">Software Development</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                <div className="card">
                    <img src="public/data.jpeg"/>
                    <h2 className="course-title">Software Development</h2>
                    <a href="#" className="enroll-btn"><i className="fas fa-graduation-cap"></i> View</a>
                    {/* Rating Section */}
                    <div className="ratings">
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                        <i className="fas fa-star rating-star"></i>
                    </div>
                </div>
                {/* Repeat the card format for other categories */}
                {/* Add as many cards as needed */}
            </div>
        </div>
    );
}

export default Home;
