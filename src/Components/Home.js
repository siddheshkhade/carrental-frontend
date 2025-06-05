import React from 'react';
import aboutImage from './assets/Car-rental-image.jpg';
import { NavLink } from 'react-router-dom';
import 'animate.css';

const Home = () => {
  return (
    <div className="container py-5">

      {/* Hero Section */}
      <div className='row align-items-center'>
        <div className='col-lg-6 p-4 animate__animated animate__fadeInLeft'>
          <h1 className='display-4 fw-bold'>
            Your Trusted Partner Since <span className='text-danger'>2010</span>
          </h1>
          <p className='lead'>Explore wide varieties of Cars with affordable prices.</p>
          <NavLink to='/about'>
            <button className='btn btn-outline-danger me-3'>Know More</button>
          </NavLink>
          <NavLink to='/contact'>
            <button className='btn btn-outline-success'>Book Now</button>
          </NavLink>
        </div>

        <div className='col-lg-6 p-4 aboutImg '>
          <img src={aboutImage} className='img-fluid rounded shadow' alt='car' />
        </div>
      </div>

      {/* Feature Section */}
      <div className='row text-center mt-5'>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite animate__delay-1s'>
          <i className="bi bi-car-front-fill fs-1 text-danger"></i>
          <h4 className='mt-3'>Wide Range of Cars</h4>
          <p>From economy to luxury – we've got the perfect ride for you.</p>
        </div>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite animate__delay-1s'>
          <i className="bi bi-wallet2 fs-1 text-success"></i>
          <h4 className='mt-3'>Affordable Pricing</h4>
          <p>Transparent prices. No hidden fees. Great deals guaranteed.</p>
        </div>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite animate__delay-1s'>
          <i className="bi bi-clock-history fs-1 text-primary"></i>
          <h4 className='mt-3'>24/7 Support</h4>
          <p>We're always here for you — before, during, and after your trip.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row my-5 text-center">
        <div className="col animate__animated animate__fadeInUp animate__delay-2s">
          <h2>Ready to ride?</h2>
          <p>Start your journey today with Car-Rental.</p>
          <NavLink to='/contact'>
            <button className='btn btn-danger btn-lg mt-2'>Book Your Car</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
