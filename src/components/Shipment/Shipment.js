import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'

const Shipment = () => {
  const navigate = useNavigate();
  const handellg = () => {
    navigate('/login');
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmitForm = data => {
    const savedCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: savedCart, shipment: data ,orderTime:new Date()}
    console.log(orderDetails);
    fetch('http://localhost:5000/addOrder',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(result=>{
           if(result){
             processOrder()
               alert('Order Completed !');
           }
        })
  }

  return (
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
  );
};
export default Shipment;