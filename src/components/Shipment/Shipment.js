import React from 'react';
import {  Link } from 'react-router-dom';

const Shipment = () => {
    return (
        <div>
            <h1>Hi am ShipMent</h1>
            <Link to ={"/login"}>Login Now</Link>
        </div>
    );
};
export default Shipment;