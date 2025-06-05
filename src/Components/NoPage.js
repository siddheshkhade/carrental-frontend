import React from 'react'
import dinoimg from './assets/dino.gif'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='container p-5 text-center'>
        <NavLink className = 'dinoimg' to = '/' > 
        <img src= {dinoimg} alt  = '404' className='img-fluid dinoimg'  style={{ width: "300px", height: "auto"}}/>
        </NavLink>
    </div>
  )
}

export default NoPage
