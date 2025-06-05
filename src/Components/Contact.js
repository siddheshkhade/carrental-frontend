import React from 'react';
import SendEnquiry from './SendEnquiry';

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {/* Form Section */}
                <div className="col-12 col-lg-6">
                    <div className="p-4 border rounded h-100">
                        <SendEnquiry />
                    </div>
                </div>

                {/* Map and Info Section */}
                <div className="col-12 col-lg-6 mt-5 ">
                    <div className="p-4 border rounded  bg-dark text-light">
                        <h2 className="text-center mb-4">Get Directions</h2>

                        <p className="d-flex align-items-center gap-2">
                            <i className="bi bi-telephone"></i> +91-7387333604
                        </p>
                        <p className="d-flex align-items-center gap-2">
                            <i className="bi bi-envelope"></i> siddhesh.khade60@gmail.com
                        </p>
                        <p className="d-flex align-items-center gap-2">
                            <i className="bi bi-geo-alt-fill"></i> Pune, Maharashtra, India
                        </p>

                        <div className="mt-3">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.295561606992!2d73.8536568!3d18.4688136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c36a5595bcdd%3A0xa8b6bcae79ffb75d!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651512371055!5m2!1sen!2sin"
                                width="100%"
                                height="230"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
