import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import logo from "../../assets/collegeLens.png";
import './Navbar.css';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const togglePrograms = () => {
        setProgramsOpen(!programsOpen);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <NavLink to="/"><img src={logo} alt="College Lens" /></NavLink>
            </div>
            <div className="hamburger">
                <Hamburger toggled={hamburgerOpen} toggle={toggleHamburger} color='white' />
            </div>
            <div className={hamburgerOpen ? 'nav-list' : 'nav-list hide-nav-list'}>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "navlink active-link" : "navlink"
                    } to="/">Home</NavLink>
                </li>
                <li className='programs-dropdown' onClick={togglePrograms}>
                    <div className='dropdown-header'>
                        Programs <FaChevronDown className={programsOpen ? 'rotate' : ''} />
                    </div>
                    <div className={`dropdown-content ${programsOpen ? 'show' : ''}`}>
                        <div className='dropdown-item'>
                            UG <FaChevronRight />
                            <div className='sidebar'>
                                <ul>
                                    <li>MBBS</li>
                                    <li>Engineering</li>
                                    <li>BBA</li>
                                    <li>BCA</li>
                                    <li>BA</li>
                                    <li>BCOM</li>
                                </ul>
                            </div>
                        </div>
                        <div className='dropdown-item'>
                            PG <FaChevronRight />
                            <div className='sidebar'>
                                <ul>
                                    <li>NEET-PG</li>
                                    <li>M-TECH</li>
                                    <li>MBA</li>
                                    <li>MCA</li>
                                    <li>MSC</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "navlink active-link" : "navlink"
                    } to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "navlink active-link" : "navlink"
                    } to="/contactUs">Contact Us</NavLink>
                </li>
            </div>
        </div>
    );
}

export default Navbar;
