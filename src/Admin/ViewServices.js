import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from "datatables.net-dt";
import 'datatables.net-responsive-dt';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

const ViewServices = () => {
    const [data, setData] = useState([])
    /* name, decription, id will defaultaly a empty string */ 
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [id, setId] = useState("")

    useEffect(()=>{
        axios.get(`https://carrenal-backend.onrender.com/services`)
        .then((res)=> setData(res.data))
        .catch((error)=>console.log(error))
            
       setTimeout(() => {
                    new DataTable('#myTable', {
                        responsive: true
                    });
                }, 100)
    },[])

    /* delete services method */
    const deleteService = (id) => {
        axios.delete(`https://carrenal-backend.onrender.com/services/${id}`)
        .then(()=> alert("Service deleted"))
        .catch((error)=>console.log(error))
    }
    /* Update service method  */ 
    const getOneService = (id)=> { 
        axios.get(`https://carrenal-backend.onrender.com/services/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setDescription(res.data.description)
            setId(res.data._id)
        })
        .catch((error)=>console.log(error))
    }
    /* submit handler to perfom Delete operation */ 
   const submitHandler = (e)=>{
    e.preventDefault();
    axios.put(`https://carrenal-backend.onrender.com/services/${id}`,{name,description})
    .then(()=>alert("Service updated"))
    .catch((error)=>console.log(error))
    }

  return (
    <div className='container p-5'>
      <h1 className='text-center'>View Services</h1>
      <table className='table table-striped' id="myTable" style={{ width: "100%" }}>
        <thead>
            <tr>
                <th>Service Id</th>
                <th>Service Name</th>
                <th>Service Description</th>
                <th colSpan={2}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((service, index)=>{
                    return (
                        <tr key={index}>
                            <td>{service.id}</td>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>
                                <button onClick={()=> getOneService(service._id)} 
                                className='btn btn-primary' data-bs-target = '#update'
                                data-bs-toggle = 'modal'><i className='bi bi-pencil'></i></button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>deleteService(service._id)}><i className='bi bi-trash'></i></button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      {/* Modal for edit form */}
      {/* modal fade will open modal smoothly on browser  */}
      <div className='modal fade' data-bs-backdrop = 'static' id='update'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Update Service</h5>
                        <button className='btn-close' data-bs-dismiss = 'modal'></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={submitHandler}>
                            <input type='text' onChange={(e)=>setName(e.target.value)} value={name} className='form-control mb-3' />
                            <textarea className='form-control mb-3'onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                            <input type='submit' value='Update Service' className='form-control text-light bg-success' data-bs-dismiss = 'modal' />
                        </form>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default ViewServices
