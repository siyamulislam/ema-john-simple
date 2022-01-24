import React from 'react';
import { Redirect } from 'react-router-dom';

const Shipment = () => {
    return (
        <div>
            <h1>Hi am ShipMent</h1>
            <Redirect to ={"/login"}>Login Now</Redirect>
        </div>
    );
};
export default Shipment;