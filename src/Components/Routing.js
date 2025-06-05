import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cars from './Cars'
import Services from './Services'
import Contact from './Contact'
import NoPage from './NoPage'
import AdminLogin from '../Admin/AdminLogin'
import Dashboard from '../Admin/Dashboard'
import AddServices from '../Admin/AddServices'
import ViewServices from '../Admin/ViewServices'
import AddCars from '../Admin/AddCars'
import ViewCars from '../Admin/ViewCars'
import ViewEnquiry from '../Admin/ViewEnquiry'
import Welcome from '../Admin/Welcome'
import CarDetails from './CarDetails'

const Routing = () => {
  return (
   
      <Routes>
        <Route path = "/" Component = {Home}/>
        <Route path = "/about" Component= {About}/>
        <Route path='/cars' Component={Cars}/>
        <Route path='/carDetails/:id' Component={CarDetails}/>
        <Route path = '/services' element = {<Services />}/>
        <Route path = '/contact' element = {<Contact />}/>
        <Route path='/admin' Component={AdminLogin} />
        <Route path='dashboard' Component={Dashboard}>
          <Route path='' Component={Welcome}/>
          <Route path='addService' Component={AddServices}/>
          <Route path='viewServices' Component={ViewServices}/>
          <Route path='addCar' Component={AddCars}/>
          <Route path='viewCars' Component={ViewCars}/>
          <Route path='viewEnquiries'Component={ViewEnquiry}/>
        </Route>

        <Route path = '*' Component={NoPage}/>
      </Routes>
   
  )
}

export default Routing
