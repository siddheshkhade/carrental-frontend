import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


const AdminLogin = () => {
    const [details, setDetails] = useState({})
    // Accessing login inside admin login 
    const [login, setLogin] = useContext(loginStatus)
    const navigate = useNavigate()

    const updateDetails = (e) => {
        console.log(e.target.name, e.target.value);
        setDetails({ ...details, [e.target.name]: e.target.value })

    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(details);
        // destructuring of objects
        const { username, password } = details

        if (username === "admin" && password === "admin") {
            setLogin(true) //Admin can see dashboard only when loginStatus is set as true
            toast.success("Login successfully..")
            navigate('/dashboard')

            
        }
        else {
            // alert("Invalid credentials...")
            toast.error("Invalid credentials.")
        }
    }
    return (
        <div className='container p-5'>
            <div className='col-lg-4 p-4 shadow mx-auto'>
                <h4 className='text-center mb-3'>Admin Login</h4>
                <form onSubmit={submitHandler}>
                    <input type='text' onChange={updateDetails} name='username' placeholder='Enter UserName' className='form-control mb-3' />
                    <input type='password' onChange={updateDetails} name='password' placeholder='Enter Password' className='form-control mb-3' />

                    {/* <input type='submit' className='form-control mb-3 text-bg-success' /> */}
                    <button type='submit' className='form-control mb-3 text-bg-success'>Login</button>

                </form>
            </div>
         
        </div>
    )
}

export default AdminLogin
