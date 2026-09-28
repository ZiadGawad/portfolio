import "./Contact.css";

function Contact() {
    return(
        <section id="contact" className="contact">
            <div className="contact-content">
                <div className="section-accent"></div>

                <h2 className="contact-title">Contact</h2>
                <p className="contact-message">
                    Let's turn ideas into something real.
                </p>

                <div className="contact-info">
                    <a className="contact-email" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=zeyad.gawad.205@gmail.com">
                        zeyad.gawad.205@gmail.com
                    </a>

                    <p className="contact-phone">01118437824</p>

                    <a className="contact-github" href="https://github.com/ZiadGawad" target="_blank">
                        GitHub
                    </a>
                    <a className="contact-linkedin" href="https://www.linkedin.com/in/zeyad-gawad/" target="_blank">
                        LinkedIn
                    </a>
                </div>

                <p className="contact-footer">
                    © 2026 Ziad Gawad. Built with curiosity and code.
                </p>
            </div>
        </section>
    );
}

export default Contact;