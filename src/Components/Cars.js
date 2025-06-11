
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import innerstyle from './innerpages.module.css';
import 'animate.css';

const Cars = () => {
  const [carDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    axios.get(`https://carrenal-backend.onrender.com/cars`)
      .then((res) => {
        setCarDetails(res.data);
        setLoading(false); // ✅ Stop loading
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container py-5'>

      <div className='text-center mb-5'>
        <h1 className='animate__animated animate__fadeInDown'>Explore Our Wide Range of Cars</h1>
        <p className='text-muted animate__animated animate__fadeInDown animate__delay-1s'>
          Find the perfect vehicle that suits your journey. From compact cars to spacious SUVs — we’ve got you covered!
        </p>
      </div>

      {/* ✅ Loading Spinner */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className='mt-2'>Loading</div>
        </div>
      ) : (
        <div className='row'>
          {carDetails.map((car, index) => (
            <div className='col-lg-4 col-md-6 mb-4' key={index}>
              <div className={`card shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-${(index % 3) + 1}s`}>
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className={`img-fluid carImg ${innerstyle.carImg} rounded-top`}
                />
                <div className='card-body d-flex flex-column justify-content-between'>
                  <h5 className='card-title'>{car.name}</h5>
                  <p className='mb-1'><strong>Price/Day:</strong> ₹{car.pricePerDay}</p>
                  <p className='mb-3'><strong>Capacity:</strong> {car.capacity} Seater</p>
                  <div className='d-flex justify-content-between mt-auto'>
                    <NavLink to={`/carDetails/${car._id}`}>
                      <button className='btn btn-primary btn-sm'>Know More</button>
                    </NavLink>
                    <NavLink to='/contact'>
                      <button className='btn btn-success btn-sm'>Book Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Cars;
