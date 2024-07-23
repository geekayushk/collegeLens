import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
            <div className='logo'><NavLink to="/"><img src={logo} /></NavLink></div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerOpen} toggle={toggleHamburger} color='white' />
            </div>
            <div className={hamburgerOpen ? 'nav-list' : 'nav-list hide-nav-list'}>
                <li><NavLink className={({ isActive }) =>
                    isActive ? "navlink active-link" : "navlink"
                } to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                    isActive ? "navlink active-link" : "navlink"
                } to="/register">Register</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                    isActive ? "navlink active-link" : "navlink"
                } to="/contactUs">Contact Us</NavLink></li>
            </div>
        </div>
    )
}

export default Navbar
