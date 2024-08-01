import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logos'>
                <Link style={{ color: 'white' }} to="https://www.facebook.com/profile.php?id=61561523865585"><FaFacebook /></Link>
                <Link style={{ color: 'white' }} to="https://www.instagram.com/collegelens24?igsh=ZWxnYzZyZnBneTNm"><FaInstagram /></Link>
            </div>
            <div className='footer-links'>
                <li>Admissions</li>
                <li>Colleges</li>
                <li>Blog</li>
                <li>Do not sell my personal information</li>
                <li>Sitemap</li>
            </div>
            <div className='footer-programs'>
                <div>
                    <h3>UG</h3>
                    <ul>
                        <Link to="/register" className='flinklist'><li>MBBS</li></Link>
                        <Link to="/register" className='flinklist'><li>Engineering</li></Link>
                        <Link to="/register" className='flinklist'><li>BBA</li></Link>
                        <Link to="/register" className='flinklist'><li>BCA</li></Link>
                        <Link to="/register" className='flinklist'><li>BA</li></Link>
                        <Link to="/register" className='flinklist'><li>BCOM</li></Link>
                    </ul>
                </div>
                <div>
                    <h3>PG</h3>
                    <ul>
                        <Link to="/register" className='flinklist'><li>NEET-PG</li></Link>
                        <Link to="/register" className='flinklist'><li>M-TECH</li></Link>
                        <Link to="/register" className='flinklist'><li>MBA</li></Link>
                        <Link to="/register" className='flinklist'><li>MCA</li></Link>
                        <Link to="/register" className='flinklist'><li>MSC</li></Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;
