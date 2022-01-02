import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    return (
        <div className='product' >
            <div >
                <img src={props.item.img} alt="" />
            </div>
            <div className='product_details'>
                <div className='product-header'>

                    <h4 className="product-title">{props.item.name}</h4>
                    <p><small>by: {props.item.seller}</small></p> 
                </div>
                <div className="product-description">
                    <div className='des-left'>
                        <p>${props.item.price}</p>
                        {<p><small>only {props.item.stock} left in stock - order soon </small></p>}
                        <button onClick={()=>{
                                props.handleAddProduct(props.item)
                        }}><span><FontAwesomeIcon icon={faShoppingCart}/></span> add to cart</button>
                    </div>
                    <div className='des-right'>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <span><FontAwesomeIcon icon={faStar}/></span>
                        <h4>Feature</h4>
                        <ul>
                            {
                                props.item.features.map( (feature, index) =>
                                    <li key={index}>{feature.description} <strong>{feature.value}</strong> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;