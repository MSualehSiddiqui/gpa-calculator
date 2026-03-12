import "./style.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Logo */}
                <div className="footer-logo">
                    <h2>GPA<span>Pro</span></h2>
                </div>

                {/* Social Links */}
                <div className="footer-socials">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} GPA Calculator. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer