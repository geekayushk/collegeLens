import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logos'>
                <Link style={{ color: 'white' }} to="https://www.facebook.com/profile.php?id=61561523865585"><FaFacebook />
                </Link>
                <Link style={{ color: 'white' }} to="https://www.instagram.com/collegelens24?igsh=ZWxnYzZyZnBneTNm"><FaInstagram /></Link>
            </div>
            <div className='footer-links'>
                <li>Admissions</li>
                <li>Colleges</li>
                <li>Blog</li>
                <li>Do not sell my personal information</li>
                <li>Sitemap</li>
            </div>
        </div>
    )
}
export default Footer
