import React, { useEffect, useState } from 'react';
import OneService from './OneService';
import axios from 'axios';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://carrenal-backend.onrender.com/services`)
      .then((res) => {
        setServicesData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container p-5'>
      <h1 className='text-center mb-4'>Our Services</h1>
      <p className='text-muted text-center animate__animated animate__fadeInDown animate__delay-1s'>
    Discover our range of services designed to make your rental experience seamless and stress-free.
      </p>
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className='mt-2'>loading</div>
        </div>
      ) : (
        <div className='row'>
          {
            servicesData.map((service, index) => (
              <OneService
                key={index}
                name={service.name}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Services;
