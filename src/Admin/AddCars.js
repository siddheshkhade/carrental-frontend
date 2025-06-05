import axios from "axios";
import React, { useState } from "react";

const AddCars = () => {
    /* Declaration of states*/ 

    const [name, setName] = useState("")
    const [pricePerDay, setPricePerDay] = useState("")
    const [capacity, setCapacity] = useState("")
    const [model, setModel] = useState("")
    const [image, setImage]= useState('')
    

    /*Create new car*/ 
    /*Create new car*/ 
    const submitHandler = (e)=> {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", name)
        formData.append("pricePerDay", pricePerDay)
        formData.append("capacity", capacity)
        formData.append("model", model)
        formData.append("image", image) 

        axios.post(`https://carrenal-backend.onrender.com/cars`, formData) 
        .then(() => {
            alert("New Car Added");
            setName("")
            setPricePerDay("")
            setCapacity("")
            setImage("")
            setModel("")
        })
        .catch((error)=>console.log(error))
    }
    return (
    <div className="container-fluid p-5 ">
       <div className="col-md-6 shadow mx-auto p-5 ">
            <h2 className="text-center">Add Cars</h2>
                <form onSubmit={submitHandler}> 
                    {/* onchange event is used to get data from inputs  */}
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter car name" className="form-control mb-3" />
                    <input type="text" value={pricePerDay} onChange={(e)=>setPricePerDay(e.target.value)} placeholder="Enter per day price" className="form-control mb-3" />
                    <input type="text" value={capacity} onChange={(e)=>setCapacity(e.target.value)} placeholder="Enter seating capacity " className="form-control mb-3"/>
                    <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Enter car model" className="form-control mb-3" />
                    
                    
                    <input type='file' value={image} className='form-control mb-3' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />

                    <input type="submit" className="form-control text-bg-success" />
                </form>
               
       </div>
    </div>
    )
}
export default AddCars