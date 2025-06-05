import axios from 'axios';
import React, { useState } from 'react'


const AddServices = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState('')
    // const [serviceImg, setServiceImg] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const formdata = new FormData()

        formdata.append("name", name)
        formdata.append("description", description)
        formdata.append("image", image) 


        axios.post(`https://carrenal-backend.onrender.com/services`, formdata,)
            
        .then(()=> {
            alert("New services added");
            setName('')
            setDescription('')
            setImage('')
            /* If you use e.target.reset(), the form fields will be cleared automatically, 
            so you don’t necessarily need to set the state to empty (setName(""), setDescription("").
            */
            // setName("");
            // setDescription("");
            
        }
        )
        .catch((error)=> console.log(error))
    }
    
  return (
    <div className='container p-5'>
      <div className='col-lg-6 shadow mx-auto p-5'>
        <h2 className='text-center'>Add Services</h2>
        <form onSubmit={submitHandler}>
            <input type='text' value={name}  onChange={(e)=> setName(e.target.value)} placeholder='Enter Service Name' className='form-control mb-3' />
            <textarea rows={5} cols = {30}  onChange={(e)=> setDescription(e.target.value)} value={description} className='form-control mb-3'placeholder='Enter Description'/>
            <input type = 'file' value={image} className='form-control mb-3' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
            <input type='submit' className='form-control text-bg-success'/>
        </form>
      </div>
    </div>
  )
}

export default AddServices
