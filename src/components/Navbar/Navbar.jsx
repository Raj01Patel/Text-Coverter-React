import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navdiv">
            <nav className="navbarItem">
                <section className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4b9j8D7D1Wa-Ft21655lUbavQJqmbUZspxb7YNoNtow&s" />
                    <p>TextConverter</p>
                </section>

                <section className='s1'>

                    <ul className="list">
                        <NavLink to="/" className="li">Home</NavLink>
                        <NavLink to="about" className="li">About</NavLink>
                        <NavLink to="contact" className="li">Contact</NavLink>
                    </ul>

                </section>
            </nav>
        </div>

    )
}

export default Navbar