import { Container } from "react-bootstrap";
import "./style.css";
import { FaPhone } from "react-icons/fa";


function Header() {
    return (
        <nav className="navbar">
            <div className="logo">
                GPA<span>Pro</span>
            </div>

            <div className="nav-right">
                <button className="contact-btn">
                    Contact Us
                    <FaPhone className="ms-2" size={12} />
                </button>
            </div>
        </nav>
    )
}

export default Header