import React, { useState } from 'react';
import Header from '../Header/Header';
import './DentalService.css'
import DentalServiceImg from '../../images/dentalService.png';

import allServices from '../fakeData/allServices';

const DentalService = () => {

    const service = allServices;
    const [services, setServices] = useState(service);

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
                    services.map(service => <div className="container mt-5">
                        <div class="card w-25" >
                            <div class="card-body">
                                <h5 class="card-title">{service.name}</h5>
                                <p class="card-text">{service.time}</p>
                                <p class="card-text">{service.availability}</p>
                                <a href="/appointment" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>)

                  
                }
            </div>



        </main >
    );
};

export default DentalService;