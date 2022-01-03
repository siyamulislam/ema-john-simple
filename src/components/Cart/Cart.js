import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    //const total=cart.reduce((total,item)=>total+item.price,0)
    let total = 0, shipping = 0,tax=0,subTotal=0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price;
    }
    if (total < 50) shipping = 0;
    else if (total < 100) shipping = 10;
    else if (total < 500) shipping = 20;
    else if (total < 5000) shipping = 50;
    else if (total < 8000) shipping = 100;
    else if (total < 10000) shipping = 200;
    else if (total >10000) shipping = 0;
    tax=total/15;
    subTotal= total+shipping+tax;

    return (
        <div className='cart'>
            <h3 className='text-success'>Order Summary</h3>
            <h4>Item Ordered: {cart.length}</h4>
            <table className='table'>
                <tbody>
                <tr><td>Items </td><td> : $ {total.toFixed(2)}</td></tr>
                <tr><td>Shipping & Handling </td><td> : $ {shipping}</td></tr>
                <tr><td>TAX & VAT </td><td> : $ {tax.toFixed(1)}</td></tr>
                <tr className='subTotal'><td >Order Total </td><td> : $ {subTotal.toFixed(2)}</td></tr>
                </tbody>
            </table>
            <Link to={'/review'}><button>Order Review</button></Link>
        </div>
    );
};

export default Cart;