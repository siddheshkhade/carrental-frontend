/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `nav-link px-3 border-end ${isActive ? 'fw-bold text-danger' : ''}`;

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);
  const closeNavbar = () => setIsNavOpen(false);

  return (
    <header className='container-fluid'>
      <nav className="navbar navbar-expand-lg py-3 bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <strong className='fs-3'>Car<span className='text-danger fs-3'>-Rental</span></strong>
          </NavLink>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isNavOpen ? (
              <span style={{ fontSize: '1.5rem' }}>&times;</span> // Close icon
            ) : (
              <span className="navbar-toggler-icon"></span> // Hamburger icon
            )}
          </button>

          {/* Nav Items */}
          <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={navLinkStyles} to="/" onClick={closeNavbar}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkStyles} to="/about" onClick={closeNavbar}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkStyles} to="/cars" onClick={closeNavbar}>Cars</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkStyles} to="/services" onClick={closeNavbar}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkStyles} to="/contact" onClick={closeNavbar}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
