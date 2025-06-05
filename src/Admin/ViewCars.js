import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-dt";
import 'datatables.net-responsive-dt';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

const ViewCars = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");
    const [capacity, setCapacity] = useState("");
    const [model, setModel] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        axios.get(`https://carrenal-backend.onrender.com/cars`)
            .then((res) => {
                setData(res.data);

                // Delay DataTable initialization until after data is set
                setTimeout(() => {
                    new DataTable('#myTable', {
                        responsive: true
                    });
                }, 100);
            })
            .catch((error) => console.log(error));
    }, []); // Run only once on component mount

    const deleteCar = (id) => {
        axios.delete(`https://carrenal-backend.onrender.com/cars/${id}`)
            .then(() => alert("Car deleted successfully.."))
            .catch((error) => console.log(error));
    };

    const getCarDetails = (id) => {
        axios.get(`https://carrenal-backend.onrender.com/cars/${id}`)
            .then((res) => {
                setName(res.data.name);
                setPricePerDay(res.data.pricePerDay);
                setCapacity(res.data.capacity);
                setModel(res.data.model);
                setId(res.data._id);
            })
            .catch((error) => console.log(error));
    };

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`https://carrenal-backend.onrender.com/cars/${id}`, {
            name,
            pricePerDay,
            capacity, 
            model
        })
            .then(() => alert("Car details updated successfully.."))
            .catch((error) => console.log(error));
    };

    return (
        <div className="container p-5">
            <h2 className="text-center">View Cars</h2>
            <div className="table-responsive">
                <table className="table table-striped" id="myTable" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Car ID</th>
                            <th>Car Name</th>
                            <th>Per day price</th>
                            <th>Seating Capacity</th>
                            <th>Car Model</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((car, index) => (
                                <tr key={index}>
                                    <td>{car.id}</td>
                                    <td>{car.name}</td>
                                    <td>{car.pricePerDay}</td>
                                    <td>{car.capacity}</td>
                                    <td>{car.model}</td>
                                    <td>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => getCarDetails(car._id)}
                                            data-bs-target='#updatecar'
                                            data-bs-toggle='modal'>
                                            <i className='bi bi-pencil'></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteCar(car._id)}>
                                            <i className='bi bi-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Modal for updating car */}
            <div className="modal fade" data-bs-backdrop='static' id="updatecar">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Car</h5>
                            <button className="btn-close" data-bs-dismiss='modal'></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateHandler}>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Car Name"
                                />
                                <input
                                    type="text"
                                    value={pricePerDay}
                                    onChange={(e) => setPricePerDay(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Price Per Day"
                                />
                                <input
                                    type="text"
                                    value={capacity}
                                    onChange={(e) => setCapacity(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Seating Capacity"
                                />
                                <input
                                    type="text"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Car Model"
                                    />
                                <input
                                    type="submit"
                                    className="form-control text-bg-success"
                                    data-bs-dismiss='modal'
                                    value="Update Car"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCars;
