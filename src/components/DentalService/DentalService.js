import React, { useState } from 'react';
import Header from '../Header/Header';
import './DentalService.css'
import DentalServiceImg from '../../images/dentalService.png';

import allServices from '../fakeData/allServices';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const DentalService = () => {

    const service = allServices;
    const [services, setServices] = useState(service);

    const [value, onChange] = useState(new Date());

    // function handleClick() {

    //     console.log('The link was clicked.');
    // }



    return (
        <main>
            <Header></Header>

            <div className="container d-flex main-content">
                <div className="col-md-6">
                    <h1>Appointment</h1>

                    <div>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={DentalServiceImg} alt="" />
                </div>
            </div>

            <div className="container">
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