import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SendEnquiry from './SendEnquiry';
import { FaUsers, FaRupeeSign, FaCarSide } from 'react-icons/fa';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios.get(`https://carrenal-backend.onrender.com/cars/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className='container py-5'>
      <div className='row'>

        {/* Car Details Section */}
        <div className='col-md-8 mt-md-0 mt-4'>
          <div className='card shadow'>
            <div className='card-body p-4'>

              
              <h2 className='text-center text-dark mb-3'>{car.name}</h2>
              <div className='d-flex justify-content-center mb-4'>
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className='img-fluid rounded carImgs'
                  style={{ maxHeight: '700px', objectFit: 'cover' }}
                />
              </div>
             
              <div className='row text-center mb-4'>
                <div className='col-md-4 mb-3'>
                  <FaCarSide size={24} className='text-primary' />
                  <p className='mb-0'><strong>Model:</strong></p>
                  <p>{car.model}</p>
                </div>
                <div className='col-md-4 mb-3'>
                  <FaUsers size={24} className='text-success' />
                  <p className='mb-0'><strong>Capacity:</strong></p>
                  <p>{car.capacity} People</p>
                </div>
                <div className='col-md-4 mb-3'>
                  <FaRupeeSign size={24} className='text-warning' />
                  <p className='mb-0'><strong>Price/Day:</strong></p>
                  <p>₹{car.pricePerDay}</p>
                </div>
              </div>

              {/* Description */}
              <h5 className='text-center mb-3'>Car Overview</h5>
              <p className='text-muted'>{car.description}</p>

              {/* Highlighted Features (Optional static content) */}
              <div className='mt-4 '>
                <h5 className='text-center'>Why Choose This Car?</h5>
                <ul className='list-unstyled mt-3'>
                  <li>✅ Well-maintained and sanitized</li>
                  <li>✅ Full insurance coverage included</li>
                  <li>✅ 24/7 roadside assistance</li>
                  <li>✅ High fuel efficiency</li>
                  <li>✅ GPS Navigation & Air Conditioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className='col-md-4 mt-md-0 mt-4'>
          <div className='p-4 bg-light rounded shadow'>
            <h5 className='text-center text-success mb-3'>🎉 Book now & get 40% OFF!</h5>
            <SendEnquiry />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;
