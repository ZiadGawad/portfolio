import "./Contact.css";

function Contact() {
    return(
        <section className="contact">
            <div className="contact-content">
                <div className="section-accent"></div>

                <h2 className="contact-title">Contact</h2>
                <p className="contact-message">
                    Let's turn ideas into something real.
                </p>

                <div className="contact-info">
                    <a className="contact-email" href="#">zeyad.gawad.205@gmail.com</a>

                    <p className="contact-phone">01118437824</p>

                    <a className="contact-github" href="#" target="_blank">
                        GitHub
                    </a>
                    <a className="contact-linkedin" href="#" target="_blank">
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