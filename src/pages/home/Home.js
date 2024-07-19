import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import Gif from '../../assets/Gif.jpg'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
const Home = () => {
    const images = [
        'https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg',
        'https://media.gettyimages.com/id/1333231964/video/university-student-friends-working-on-laptop-and-books-sitting-on-the-steps-in-the-campus.jpg?s=640x640&k=20&c=zL022zfJWQ_4b6j_rG7igoUQPBXeI7hBpuMkDvM2p38=',
        'https://theunitedindian.com/images/college-07-04-24-blog3.jpg',
    ];
    return (
        <>
            <Navbar />
            <div className='poster'>
                <h2>India's Best Ever Admission Assistance Portal</h2>
                <p className='poster-sol'>One Stop Solution For All College Seekers</p>
                <p>A portal that has all the information related to college and can help you to get admission in your dream college.</p>
                <a href="tel:+919153375491" className="button-5" role="button">Call Now</a>
            </div>
            <div className='about-details'>
                <div className='gif-heading'>
                    <div className='gif'>
                        <img src={Gif} />
                    </div>
                    <div className='g-heading'>
                        <h3>College Lens is your comprehensive admissions support platform, guiding students seamlessly through the complex journey of college applications. We connect aspiring students with personalized guidance, strategic insights, and the necessary resources to navigate the admissions process with confidence.</h3>
                    </div>
                </div>
                {/* <div className='para-details'>
                    <p>Firefly is one of the world’s leading mobility advertising providers.</p>

                    <p>We operate a three-sided marketplace across drivers, advertisers, and smart city data consumers.</p>

                    <p>Our proprietary advertising displays are installed on, in and around vehicles to deliver dynamic content based on location, time and other contextual triggers such as weather and live sports scores.</p>

                    <p> We are also the industry leader for individual-level attribution on ad-effectiveness in the physical world.</p>

                    <p>This IP is similar to what has been developed by Google in the digital world.</p>
                </div> */}
            </div>
            <div className='missions'>
                <div className='our-mission'>
                    <h1>Our Mission</h1>
                    <p>At CollegeLens, our mission is to empower students to achieve their academic and professional aspirations through expert guidance and personalized counseling. Our goal is to help students realize their full potential, turning their dreams of a successful professional future into reality.
                    </p>
                    <a href='#' className='join-team'>Join our team</a>
                </div>
                <div className='mission-list'>
                    <div>
                        <h1>Direct Admission</h1>
                        <p>
                            We facilitate direct admission to the college of your choice through Management or NRI quota, ensuring a smooth and hassle-free process.
                        </p>
                    </div>
                    <div>
                        <h1>Comprehensive Admissions Support</h1>
                        <p>
                            Whether you're pursuing MBBS, MD/MS, DM, MCh, BAMS, BHMS, BPT, BTech, MTech, BBA, or MBA, we provide expert assistance for all types of admissions.
                        </p>
                    </div>
                    <div>
                        <h1>Complete Admission Guidance</h1>
                        <p>
                            Our team of experienced career counselors possesses deep expertise and knowledge of various fields. We offer comprehensive admission guidance for both undergraduate and postgraduate courses.
                        </p>
                    </div>
                    <div>
                        <h1>Personalized Counseling Support</h1>
                        <p>
                            We provide one-on-one counseling, guiding you through all the necessary information to help you find the best college for your chosen field. Our dedicated team will support and monitor you throughout the entire admission process.</p>
                    </div>

                </div>
            </div>
            <div>
                <Carousel images={images} />
            </div>
            <Footer />
        </>
    )
}

export default Home
