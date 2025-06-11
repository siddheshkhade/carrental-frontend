import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <section className="container-fluid p-0">
            {/* Header Section */}
            <div className="bg-dark aboutbread text-center text-light py-4">
                <h5 className="fs-5">
                    Welcome to Car-Rental – hassle-free, reliable, and affordable travel solutions.
                </h5>
                <nav className="mt-3" aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <NavLink to="/" className="text-light fw-bold text-decoration-underline">Home</NavLink>
                        </li>
                        <span className="mx-2">/</span>
                        <li className="breadcrumb-item">
                            <NavLink to="/services" className="text-light fw-bold text-decoration-underline">Services</NavLink>
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Mission & Vision Section */}
            <div className="container py-4">
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="p-4 bg-danger text-light h-100 shadow rounded">
                            <h4 className="text-center">Our Mission</h4>
                            <p>
                                To provide seamless, reliable, and affordable car rental solutions that cater to the diverse needs of our customers.
                                We aim to make transportation easy and accessible through a user-friendly booking experience, transparent pricing, and exceptional customer support.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-4 bg-success text-light h-100 shadow rounded">
                            <h4 className="text-center">Our Vision</h4>
                            <p>
                                To become the most trusted and preferred car rental service, empowering people to travel with freedom, flexibility, and confidence.
                                We strive to redefine the car rental experience by integrating cutting-edge technology, delivering unparalleled customer service, and offering eco-friendly vehicle options.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Who We Are & Why Choose Us Section */}
                <div className="row g-4 mt-4">
                    <div className="col-12 col-md-6">
                        <div className="p-4 bg-light h-100 shadow rounded">
                            <h4>Who We Are</h4>
                            <p>
                                Car-Rental is a passionate team of professionals committed to transforming the way people travel.
                                With a fleet of well-maintained vehicles and a customer-centric approach, we have become a go-to choice for travelers, businesses, and families.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-4 bg-light h-100 shadow rounded">
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
