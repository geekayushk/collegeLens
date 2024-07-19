import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import emailjs from "@emailjs/browser";

import './Register.css';
import toast, { Toaster } from 'react-hot-toast';

const courses = [
    "BE",
    "Medical",
    "MBA",
    "BSc",
    "BA",
    "BCom",
    "MTech",
    "MSc",
    "MA",
    "MCom",
    "PhD",
    "BBA",
    "BCA",
    "MCA",
    "LLB",
    "LLM",
    "BEd",
    "DEd",
    "Nursing",
    "Pharmacy",
    "Architecture",
    "Design",
    "Fashion",
    "Hotel Management",
    "Journalism",
    "Mass Communication",
    "Others"
];

const Register = () => {
    const [isOthers, setIsOthers] = useState(false);
    const [selected, setSelected] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        course: '',
        course_detail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setSelected(value);
        setIsOthers(value === 'Others');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("form", formData)


        setIsLoading(true)
        emailjs.send('service_s37glfh', 'template_c46oy6n', formData, '9jSqIxPmZztmRf88w')
            .then((result) => {
                console.log(result.text);
                toast.success("Email sent successfully!")
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email')
            });
        setIsLoading(false);
    };

    return (
        <>
            <Navbar />
            <Toaster />
            <div className="form-container">
                <div>
                    <h2>To apply for management quota, please complete the form below. Our team will contact you soon.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name<span className="required">*</span></label>
                            <input type="text" id="name" name="from_name" placeholder="Full Name" value={formData?.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number<span className="required">*</span></label>
                            <input type="tel" id="phone" name="phone" placeholder="9999999999" value={formData?.phone} onChange={handleChange} required pattern="[0-9]{10}" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Course<span className="required">*</span></label>
                            <select id="course" name="course" required onChange={handleCourseChange}>
                                <option value="">Select Course</option>
                                {courses.map(course => (
                                    <option key={course} value={course}>{course}</option>
                                ))}
                            </select>
                        </div>
                        {isOthers && (
                            <div className="form-group">
                                <label htmlFor="courseDetail">Course Detail<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="course_detail"
                                    name="course_detail"
                                    placeholder="Please specify your course"
                                    value={formData?.course_detail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <p className="required">*Required</p>
                        </div>
                        <button type="submit" className="submit-btn" disabled={isLoading}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
