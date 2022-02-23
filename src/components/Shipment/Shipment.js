import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Shipment.css'

const Shipment = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  document.title = "Shipment"
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shipmentData, setShipmentData] = useState(null);

  const onSubmitForm = data => {
    setShipmentData(data)
  }
  const handelPaymentSuccess = (paymentID,paymentType) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: shipmentData,
      paymentID,
      paymentType,
      orderTime: new Date()
    }
    console.log(orderDetails);
    fetch('https://powerful-castle-25731.herokuapp.com/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          processOrder()
          alert('Order Completed !');
        }
      })
  }

  return (
    <div className="row m-3 ms-5 " >
      <div style={{ display: shipmentData ? 'none' : 'block' }} className="col-md-6">
        <form onSubmit={handleSubmit(onSubmitForm)} className='ship-form'>
          <input {...register("name", { required: true })} placeholder='Name' defaultValue={loggedInUser.name} />
          {errors.name && <span className='error'>Name field is required</span>}
          <input {...register("email", { required: true })} placeholder='Email' defaultValue={loggedInUser.email} />
          {errors.email && <span className='error'>Email field is required</span>}
          <input {...register("address", { required: true })} placeholder='Address' defaultValue={loggedInUser.address} />
          {errors.address && <span className='error'>Address field is required</span>}
          <input {...register("phone", { required: true })} placeholder='Phone' defaultValue={loggedInUser.phone} />
          {errors.phone && <span className='error'>Phone field is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div  style={{display: !shipmentData? 'none':'block'}} className="col-md-6 ps-5">
        <h2>Complete Your Payment</h2>
        <ProcessPayment handelPayment={handelPaymentSuccess}></ProcessPayment>

      </div>
    </div>
  );
};
export default Shipment;