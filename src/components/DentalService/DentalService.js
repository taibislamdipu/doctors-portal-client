import React, { useState } from 'react';
import Header from '../Header/Header';
import './DentalService.css'
import DentalServiceImg from '../../images/dentalService.png';

import allServices from '../fakeData/allServices';



const DentalService = () => {

    const service = allServices;
    const [services, setServices] = useState(service);

    // function handleClick() {

    //     console.log('The link was clicked.');
    // }



    return (
        <main>
            <Header></Header>

            <div className="container d-flex main-content">
                <div className="col-md-6">
                    <h1>Appointment</h1>

                    <input className="form-control w-50 mt-5" type="date" name="" id="" />
                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={DentalServiceImg} alt="" />
                </div>
            </div>

            <div>
                {
                    services.map(service => <div className="container mt-5" key={service.id}>
                        <div className="card w-25" >
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.time}</p>
                                <p className="card-text">{service.availability}</p>
                                <a href="/appointment" class="btn btn-primary">Go somewhere</a>
                                {/* <button onClick={() => handleClick()} className="btn btn-primary">Book appointment</button> */}
                            </div>
                        </div>
                    </div>)

                  
                }
            </div>



        </main >
    );
};

export default DentalService;