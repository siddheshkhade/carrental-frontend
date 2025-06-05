import React from 'react'
import { NavLink } from 'react-router-dom';


const OneService = (props) => {
  return (
    <div className='col-md-6 col-lg-4 mb-3'>
      <div className='card h-100 service-card'>
        <img
          src={props.imageUrl}
          alt={props.name}
          className='img-fluid serviceImg'
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.description}</p>
          <div className="d-flex justify-content-end mt-auto">
            <NavLink to='/contact'>
              <button className='btn btn-success btn-sm'>Book Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneService
