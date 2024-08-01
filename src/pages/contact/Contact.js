import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./Contact.css"
import ContactImg from "../../assets/contact-us.png"
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div class="header">
                <h1>Contact Us for College Admissions</h1>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Our Locations</h2>
                    <ul>
                        <li>
                            <IoLocationSharp /> Delhi: IIEMSD, 7 Community Centre, East of Kailash, New Delhi-110065
                        </li>
                        <li>
                            <IoLocationSharp /> Ranchi: JeetMantra Classes, Galaxy mall ratu road, Near Piska, Ranchi-834001, Jharkhand
                        </li>
                        <li> <IoLocationSharp />Bhopal: B33 Kasturba Nagar, Bhopal, MP-462039</li>
                        <li> <IoLocationSharp />Bengaluru: New Bel road, Bengaluru</li>
                        <li> <IoLocationSharp />Patna: Flat No-02G, Tej Narayan Complex, Nandlal Chapra, Near Agamkuan Thana, Patna-800026</li>
                    </ul>
                    <h2>Contact Numbers</h2>
                    <ul>
                        <li><IoCallSharp />+916361162252</li>
                        <li><IoCallSharp />+919153375491</li>
                        <li><IoCallSharp />+918861560895</li>
                    </ul>
                </div>
                <div class="contact-form">
                    <img src={ContactImg} className='contact-img' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
