import React from 'react';
import Header from '../Header/Header';

const Appointment = () => {
    return (
        <div>
            <Header></Header>

            <h1>This is appointment page</h1>

            <div className="container w-25">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="YOUR NAME" />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="number" placeholder="PHONE NUMBER" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="EMAIL" />
                    </div>

                    <div class="form-group">
                        <input type="date" class="form-control" id="date" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;