import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Hamburger from 'hamburger-react'
import logo from "../../assets/collegeLens.png"
const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    return (
        <div className='navbar'>
            <div className='logo'><Link to="/"><img src={logo} /></Link></div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerOpen} toggle={toggleHamburger} color='white' />
            </div>
            <div className={hamburgerOpen ? 'nav-list' : 'nav-list hide-nav-list'}>
                <li><Link style={{ color: 'white', listStyle: 'none', textDecoration: 'none' }} to="/">Home</Link></li>
                <li><Link style={{ color: 'white', listStyle: 'none', textDecoration: 'none' }} to="/register">Register</Link></li>
                <li><Link style={{ color: 'white', listStyle: 'none', textDecoration: 'none' }} to="/contactUs">Contact Us</Link></li>
            </div>
        </div>
    )
}

export default Navbar
