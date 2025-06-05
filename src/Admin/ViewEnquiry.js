import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiry = () => {
        const [data, setData] = useState([])
        const [userName, setUserName] = useState("")
        const [mobile,setMobile] = useState("")
        const [email, setEmail] = useState("")
        const [service, setService] = useState("")
        const [car, setCar] = useState("")
        const [bookingDate, setBookingDate] = useState("")
        const [id,setId] = useState("")

    /* Fetches enquiry*/ 
    useEffect(()=> {
        axios.get(`https://carrenal-backend.onrender.com/contactus`)
        .then((res)=> setData(res.data))
        .catch((error)=>console.log(error))
    })
    /* Delete booking of user*/
    const deleteEnquiry = (id) => {
        axios.delete(`https://carrenal-backend.onrender.com/contactus/${id}`)
        .then(()=> alert("Booking deleted successfully..."))
        .catch((error)=> console.log(error))
    } 
   const getEnquiryDetails = (id) => {
    axios.get(`https://carrenal-backend.onrender.com/contactus/${id}`)
    .then((res)=>{
        setUserName(res.data.userName)
        setMobile(res.data.mobile)
        setEmail(res.data.email)
        setService(res.data.service)
        setCar(res.data.car)
        setBookingDate(res.data.bookingDate)
        setId(res.data._id)
    })
    .catch((error)=>console.log(error))
   } 
   const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`https://carrenal-backend.onrender.com/contactus/${id}`,{userName,mobile,email,service,car,bookingDate})
    .then(()=>alert("User data updated successfully..."))
    .catch((error)=>console.log(error))
   }
  return (
    <div className='container p-5'>
      <h2 className='text-center'>View Bookings</h2>
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>Enquiry Id</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Services</th>
                <th>Car</th>
                <th>Booking Date</th>
                <th colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((enquiry, index) => {
                    return (
                        <tr key={index}>
                            <td>{enquiry._id}</td>
                            <td>{enquiry.userName}</td>
                            <td>{enquiry.mobile}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.service}</td>
                            <td>{enquiry.car}</td>
                            <td>{enquiry.bookingDate}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=> getEnquiryDetails(enquiry._id)} data-bs-toggle = "modal" data-bs-target = '#bookingupdate' ><i className='bi bi-pencil'></i></button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=> deleteEnquiry(enquiry._id)}><i className='bi bi-trash'></i></button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <div className="modal fade" data-bs-backdrop = 'static'  id="bookingupdate" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Car</h5>
                                <button className="btn-close" data-bs-dismiss = 'modal'></button>
                            </div>
                            <div className="modal-body">
                            <form onSubmit={submitHandler}>
                                <input type="text" value = {userName} onChange = {(e)=> setUserName(e.target.value)} className="form-control mb-3" />
                                <input type="text" value = {mobile} onChange={(e)=> setMobile(e.target.value)} className="form-control mb-3" />
                                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control mb-3" />
                                <input type="text" value={service} onChange={(e)=> setService(e.target.value)} className="form-control mb-3" />
                                <input type="text" value={car} onChange={(e)=> setCar(e.target.value)} className="form-control mb-3" />
                                <input type="text" value={bookingDate} onChange={(e)=> setBookingDate(e.target.value)} className="form-control mb-3" />


                                <input type="submit" className="form-control text-bg-success" data-bs-dismiss = 'modal'/>
                            </form>
                            </div>    
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default ViewEnquiry
