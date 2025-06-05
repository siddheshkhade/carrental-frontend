import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <section className="container-fluid p-0 animate__animated animate__fadeIn">
            <div className="text p-4 bg-dark text-center aboutbread img-fluid animate__fadeInDown">
                <h5 className="fs-5 text-light">
                    Welcome to Car-Rental – hassle-free, reliable, and affordable travel solutions.
                </h5>
                <nav aria-label="breadcrumb" className="text-end pe-3 pt-2">
                    <ol className="breadcrumb justify-content-end gap-2 align-items-center">
                        <NavLink to='/'><li className="breadcrumb-item text-light fw-bold" style={{ textDecoration: "underline" }}>Home</li></NavLink>
                        <NavLink to='/services'><li className="breadcrumb-item text-light fw-bold" style={{ textDecoration: "underline" }}>/ Services</li></NavLink>
                    </ol>
                </nav>
            </div>

            <div className="container p-4">
                <div className="row g-4">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <div className="shadow p-4 bg-danger text-light animate__fadeInLeft">
                            <h4 className="text-center">Our Mission</h4>
                        <p>
    To provide seamless, reliable, and affordable car rental solutions that cater to the diverse needs of our customers. 
    We aim to make transportation easy and accessible through a user-friendly booking experience, transparent pricing, and exceptional customer support. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInRight">
                        <div className="shadow p-4 bg-success text-light animate__fadeInRight animate__infinite ">
                            <h4 className="text-center">Our Vision</h4>
                            <p>
                                To become the most trusted and preferred car rental service, empowering people to travel with freedom, flexibility, and confidence. 
                                We strive to redefine the car rental experience by integrating cutting-edge technology, delivering unparalleled customer service, and offering eco-friendly vehicle options. 
                            </p>
                            </div>
                    </div>
                </div>

                <div className="row g-4 mt-4">
                    <div className="col-md-6">
                        <div className="shadow p-4 bg-light h-100 animate__animated animate__fadeInLeft">
                            <h4>Who We Are</h4>
                            <p>Car-Rental is a passionate team of professionals committed to transforming the way people travel. With a fleet of well-maintained vehicles and a customer-centric approach, we have become a go-to choice for travelers, businesses, and families.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="shadow p-4 bg-light h-100 animate__animated animate__fadeInRight">
                            <h4>Why Choose Us?</h4>
                            <ul className="ps-3">
                                <li>✅ Wide range of vehicles for every need and budget</li>
                                <li>✅ Easy booking process and transparent pricing</li>
                                <li>✅ 24/7 customer support for a worry-free experience</li>
                                <li>✅ Clean, sanitized, and well-maintained vehicles</li>
                                <li>✅ Competitive daily, weekly, and monthly rental plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;