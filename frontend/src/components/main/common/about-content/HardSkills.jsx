function HardSkills() {
    return (
        <div className="container-born-in-italy-left">
            <div className="top-container">
                <div className="container-image">
                    <img src="/image_portfolio.jpg" alt="Skills" />
                </div>
                <div className="container-statistics">
                    <div className="inner-statistics">
                        <p className="nums">5+</p>
                        <p className="small-txt">Languages</p>
                    </div>
                    <div className="inner-statistics">
                        <p className="nums">10+</p>
                        <p className="small-txt">Years of experience</p>
                    </div>
                    <div className="inner-statistics">
                        <p className="nums">8+</p>
                        <p className="small-txt">Technologies</p>
                    </div>
                </div>
            </div>
            <div className="description-section">
                <h2>Hard Skills</h2>
                <p>
                    I specialize in backend development, primarily working with languages such as JavaScript, TypeScript, and Python.
                    My expertise includes working with frameworks like Node.js, React, and SQL databases.
                    I am passionate about creating efficient, scalable systems that solve real-world problems.
                </p>
                <div className="button-container">
                    <button className="button">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default HardSkills;
