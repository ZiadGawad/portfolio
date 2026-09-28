import "./About.css";

function About () {
    return(
        <section id="about" className="about">
            <div className="about-content">
                <div className="section-accent"></div>

                <h2 className="about-title">ABOUT</h2>

                <p className="about-intro">
                    I’m Ziad Gawad, a Software Engineering student at Cairo University.
                    I enjoy building things, learning how systems work, 
                    and turning what I learn into real projects.
                </p>

                <div className="about-university">
                    <h3>Cairo University</h3>
                    <p>Faculty of Computers & Artificial Intelligence </p>
                    <p>Software Engineering Department · Class of 2028</p>
                </div>

                <p className="about-skills-title">Skills</p>

                <p className="about-skills">
                    C++ · JavaScript · React · SQL · Git · GitHub
                </p>
            </div>
        </section>
    );
}

export default About;