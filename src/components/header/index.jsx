import { Container } from "react-bootstrap";
import "./style.css";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                GPA<span>Pro</span>
            </Link>

            <div className="nav-right">
                <Link to="/about">
                    <button className="contact-btn me-2">
                        About Me
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Header