import "./style.css";

function ContactForm() {
    return (
        <section className="contact-premium">

            <h2 className="contact-title">Contact Me</h2>

            <div className="contact-card-premium">

                <form className="contact-form-premium">

                    <div className="input-box">
                        <input type="text" required />
                        <label>Name</label>
                    </div>

                    <div className="input-box">
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <textarea rows="4" required></textarea>
                        <label>Message</label>
                    </div>

                    <button className="contact-send-btn">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    )
}

export default ContactForm