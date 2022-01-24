import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';

const Shipment = () => {
    const  navigate = useNavigate();
    const handellg=()=>{
        navigate('/login');
    }
    return (
        <div>
            <h1>Hi am ShipMent</h1>
           <button onClick={handellg}>LOgin</button>
        </div>
    );
};
export default Shipment;