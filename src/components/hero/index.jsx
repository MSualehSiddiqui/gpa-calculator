import "./style.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-glow"></div>

            <div className="hero-content" data-aos="zoom-in">

                <p className="tagline">
                    Smart Tools for Smart Students
                </p>

                <h1>
                    Calculate Your <span>GPA</span>
                    <br />
                    With Precision & Style
                </h1>

                <p className="hero-description">
                    A fast, modern GPA calculator built for students who care about
                    their academic performance. Track your semester GPA and cumulative
                    GPA in seconds.
                </p>
                <a href="#calculator">
                    <button className="cta-btn">
                        Start Calculating
                    </button>
                </a>

            </div>

        </section>
    )
}

export default Hero