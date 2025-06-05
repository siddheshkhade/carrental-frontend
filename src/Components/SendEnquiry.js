    import axios from "axios";
    import React, { useState } from "react";
    import { toast, ToastContainer } from 'react-toastify';

    const SendEnquiry = () => {
    

        const [userName, setUserName] = useState("")
        const [mobile,setMobile] = useState("")
        const [email, setEmail] = useState("")
        const [service, setService] = useState("")
        const [car, setCar] = useState("")
        const [bookingDate, setBookingDate] = useState("")
        const cars = ["Audi", "BMW", "Mercedes", "Toyota", "Honda", "Ford", "Chevrolet", "Hyundai", "Kia", "Nissan"];
        const services = ["Shipping cars",  "Self-Drive Rental", "Luxary car services", "Transmission Service", "Airport Pickup", "Wheel Alignment Service", "Detailing Service", "Inspection Service"];

    const submitHandler = (e) => {
            /* page will not refreshed again and again if u submited the form */
            e.preventDefault();

            // Regular expressions for validation
            const alphaExpr = /^[a-zA-Z\s]+$/;
            const mobileExpr = /^[0-9]+$/;
            const emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Error elements/messages
            const nameError = document.getElementById("nameError");
            const mobileError = document.getElementById("mobileError");
            const emailError = document.getElementById('emailError');

            // Name validation
            if (userName === "") {
                nameError.textContent = "Please enter your name";
            } else {
                if (userName.match(alphaExpr)) {
                    nameError.textContent = "";
                } else {
                    nameError.textContent = "Please enter only alphabets";
                }
            }

            // Mobile validation
            if (mobile === "") {
                mobileError.textContent = "Please enter your mobile no";
            } else {
                if (mobile.match(mobileExpr)) {
                    if (mobile.length === 10) {
                        mobileError.textContent = "";
                    } else {
                        mobileError.textContent = "Please enter 10 digits mobile no";
                    }
                } else {
                    mobileError.textContent = "Please enter only numbers";
                }
            }
            // Email validation
            if (email === "") {
                emailError.textContent = "Please enter email address"
            }
            else if (!email.match(emailExpr)) {
                emailError.textContent = "Please enter valid email address"
            }

            // If there are validation errors, do not proceed with form submission
            if (nameError.textContent || mobileError.textContent || emailError.textContent) {
                return;
            }

            axios.post(`https://carrenal-backend.onrender.com/contactus`,{userName,mobile,email,service,car,bookingDate})
            .then(()=>{
                toast.success("Enquiry submitted successfully 🎉, Our team will contact you soon!");
                // e.target.reset();
                setUserName("")
                setMobile("")
                setEmail("")
                setService("")
                setCar("")
                setBookingDate("")
            })
            .catch((error)=>{
            
                console.log(error)
            })
            

            // Regular expressions for validation
        

            // After validation (if no errors)
            
        };


        return (
            <div className='container'>
                    <form onSubmit={submitHandler} >
                        <h2 className='text-center mb-3'>Contact Form</h2>
                    <div className = 'row'>
                        <input type='text' name='userName' placeholder='Enter name' onChange={(e)=>setUserName(e.target.value)} value={userName}  className='form-control mb-2' />
                        <p id='nameError' className='text-danger'></p>
                        <input type="text" name='mobile' placeholder='Enter Mobile no' onChange={(e)=>setMobile(e.target.value)} value={mobile}  className='form-control mb-2' />
                        <p id='mobileError' className='text-danger'></p>
                        <input type='text' name='email' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}  className='form-control mb-2' />
                        <p id='emailError' className='text-danger'></p>
                        {/* <input type='text' name='service' placeholder='Enter Service name ' value={service} onChange={(e)=>setService(e.target.value) }  className='form-control mb-3' /> */}
                        <select name = 'service' value={service} onChange={(e) => setService(e.target.value)} className="form-control mb-3">
                            <option value=''>Select Service</option>
                            {
                                services.map((servicename, index) => {
                                    return (
                                        <option key={index} value={servicename}>{servicename}</option>
                                    )
                                })
                            }
                        </select>
                        {/* <input type='text' name='car' placeholder='Enter Car name' value={car} onChange={(e)=>setCar(e.target.value)}  className='form-control mb-3' /> */}
                        <select name="car" value={car} onChange={(e)=>setCar(e.target.value)} className='form-control mb-3'>
                            <option value="">Select Car</option>
                            {cars.map((carname, index) => (
                                <option key={index} value={carname}>{carname}</option>
                            ))}
                        </select>
                        <input type='date' name='bookingDate' value={bookingDate} onChange={(e)=>setBookingDate(e.target.value)}  className='form-control mb-3' placeholder='select Booking Date' />
                    </div>
                        <input type='submit' className='form-control mb-3  btn btn-success' />
                    </form>
                
                </div>
        )
    }
    export default SendEnquiry