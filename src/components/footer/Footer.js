import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logos'>
                <FaXTwitter />
                <Link style={{ color: 'white' }} to="https://www.instagram.com/collegelens24?igsh=ZWxnYzZyZnBneTNm"><FaInstagram /></Link>
                <FaLinkedinIn />
            </div>
            <div className='footer-links'>
                <li>Advertising T&C's</li>
                <li>Privacy Policy</li>
                <li>Blog</li>
                <li>Do not sell my personal information</li>
                <li>Sitemap</li>
            </div>
        </div>
    )
}
export default Footer
