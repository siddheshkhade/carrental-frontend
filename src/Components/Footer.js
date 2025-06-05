import React from 'react'

const Footer = () => {
  return (
    <footer className='container-fluid p-4 mt-5 text-bg-dark text-center'>
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <h5>Car-Rental</h5>
          <p>Your trusted partner for car rentals.</p>
        </div>
      
        <div className="col-md-4 mb-3 mb-md-0">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
            <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            {/* <li><a href="/cars" className="text-light text-decoration-none">Cars</a></li>
            <li><a href="/services" className="text-light text-decoration-none">Services</a></li> */}
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Contact Us</h6>
          <p>Email: info@car-rental.com</p>
          <p>Phone: +91-7387333604</p>
          <div>
            <a href="#" className="text-light me-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
      <hr className="bg-light" />
      <p className="mb-0">© 2025. Designed and developed by Siddhesh_Khade</p>
      <p className="mb-0">All rights reserved to Car-Rental</p>
    </footer>
  )
}

export default Footer
