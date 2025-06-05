import React, { useEffect, useState } from 'react'
import OneService from './OneService'
import axios from 'axios'

const Services = () => {
    const [servicesData, setServicesData] = useState([])
    
    useEffect(()=>{
      axios.get(`https://carrenal-backend.onrender.com/services`)
      .then((res)=> setServicesData(res.data))
      .catch((error)=> console.log(error))
    })

  return (
    <div className='container p-5 ' >
    <h1 className='text-center mb-4'> Our Services</h1>
    <div className='row'>
        {
            servicesData.map((service, index) => {
                return (
                    <OneService key = {index} name = {service.name} description = {service.description} imageUrl = {service.imageUrl} />
                    
                )
            })
        }
    </div>
    </div>
  )
}

export default Services
