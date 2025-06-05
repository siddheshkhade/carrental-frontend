import React  from 'react'
import useCustomCallApi from './CustomCallApi'


const Welcome = () => {

  // To avoid getting legth error, I have commented written empty [] so it will return 0
  // const cars = []
  // const services = []
  // const enquiry = []

/* This will print real-time data on the browser for cars, services, enquiries */
  const cars = useCustomCallApi(`https://carrenal-backend.onrender.com/cars`)
  const services = useCustomCallApi(`https://carrenal-backend.onrender.com/services`)
  const enquiry = useCustomCallApi(`https://carrenal-backend.onrender.com/enquiries`)

  return (
    <div className='container'>
      <h1 className='text-center mt-3'>Welcome To Admin Panel</h1>
      <div className='row mt-5 cards-data'>
        <div className='col-lg-4 mb-3'>
          <div className='card p-5 shadow mx-auto bg-success'>
            <div className='card-body text-center'>
              <h1 className='card-title'>{cars.length}+</h1>
              <h3 className='card-title'>Cars</h3>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-3'>
          <div className='card p-5 shadow mx-auto bg-danger'>
            <div className='card-body text-center'>
              <h1 className='card-title'>{services.length}+</h1>
              <h3 className='card-title'>Services</h3>
            </div>
          </div>
        </div>
        {/* <div className='col-lg-4 mb-3'>
          <div className='card p-5 shadow mx-auto text-bg-info'>
            <div className='card-body text-center '>
              <h1 className='card-title'>{enquiry.length}+</h1>
              <h3 className='card-title'>Enquiries</h3>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Welcome
