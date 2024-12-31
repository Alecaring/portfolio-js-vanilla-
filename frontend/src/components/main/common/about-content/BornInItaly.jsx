function BornInItaly() {
    return (
        <div className="container-born-in-italy-left">
            <div className="top-container">
                <div className="container-image">
                    <img src="/image_portfolio.jpg" alt="Profile" />
                </div>
                <div className="container-statistic">
                    <div className="inner-statistic">
                        <p className="nums">78</p>
                        <p className="small-txt">_projects</p>
                    </div>
                    <div className="inner-statistic">
                        <p className="nums">5</p>
                        <p className="small-txt">_languages</p>
                    </div>
                    <div className="inner-statistic">
                        <p className="nums">15</p>
                        <p className="small-txt">_certificates</p>
                    </div>
                </div>
            </div>
            <div className="bottom-top-container">
                <div className="name">
                    <h1>Alessio Caringella</h1>
                </div>
                <div className="description">
                    <div className="bio-section">
                        Passionate developer with a love for clean code, innovative solutions, and meaningful collaborations. Based in a small, picturesque Italian town, I bring creativity and dedication to every project.
                    </div>
                    <div className="button-container">
                        <button className="button">Follow</button>
                        <button className="button">Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BornInItaly;
