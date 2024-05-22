import './Footer.css'
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="atag">
                    <NavLink to="/" className="a">Home</NavLink>
                    <NavLink to="about" className="a">About</NavLink>
                    <NavLink to="contact" className="a">Contact</NavLink>
                </div>
                <div className="icon">
                    <div>
                        <a href="https://github.com/Raj01Patel"><FaFacebook /></a>
                        <a href="https://github.com/Raj01Patel"><GrInstagram /></a>
                        <a href="https://x.com/Patel_Raj_08"><FaTwitter /></a>
                        <a href="https://github.com/Raj01Patel"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/raj-patel-b3a5112aa/"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer