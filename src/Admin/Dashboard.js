import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { loginStatus } from '../App'
import AdminLogin from './AdminLogin'

const Dashboard = () => {
    const [login, setLogin] = useContext(loginStatus)

    if (login) { //if login status is true admin can logged in and access dashboard
        return (
            <div className='container-fluid d-flex '>
            <div className='row'>
            <aside className='col-lg-3 '>
            <NavLink to={''}>
            <h5 className='btn'>Admin Dashboard</h5>
            </NavLink>
            <NavLink to={'addService'}>
            <button className='btn btn-outline-success'>Add Service</button>
            </NavLink>
            <NavLink to={'viewServices'}>
            <button className="btn btn-outline-danger">View Service</button>
            </NavLink>
            <NavLink to={'addCar'}>
            <button className="btn btn-outline-info">Add Cars</button>
            </NavLink>
            <NavLink to={'viewCars'}>
            <button className="btn btn-outline-secondary">View Cars</button>
            </NavLink>
            {/* <NavLink to={'viewEnquiries'}>
            <button className="btn btn-outline-dark">View Enquiries</button>
            </NavLink> */}
            <NavLink to={'/admin'}>
            <button className="btn btn-danger">Logout</button>
            </NavLink>
            {/* Show hr only on mobile */}
            {/* <hr className="d-block d-lg-none my-2 border-black" style={{ padding: '10px 0' }} /> */}
            </aside>
            <div className='col-lg-9'>
            <Outlet />
            </div>
            </div>
            </div>
        )
    }
    else {
        return <AdminLogin /> //if login status is false admin can't access dashboard returns to Login page
    }
}

export default Dashboard
