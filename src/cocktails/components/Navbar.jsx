import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../components/logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/" className='logo'>
                    <img src={Logo}></img>
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
