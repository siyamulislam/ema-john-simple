import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock,features,key}=props.item;
    return (
        <div className='product' >
            <div >
                <img src={img} alt="" />
            </div>
            <div className='product_details'>
                <div className='product-header'>

                    <h4 className="product-title">  <Link to={"/product/"+key} > { name} </Link>   </h4>
                    <p><small>by: {seller}</small></p> 
                </div>
                <div className="product-description">
                    <div className='des-left'>
                        <p>${price}</p>
                        {<p><small>only {stock} left in stock - order soon </small></p>}
                        {}
                        { props.showAddCart && <button onClick={()=>{props.handleAddProduct(props.item)}}>
                            <span><FontAwesomeIcon icon={faShoppingCart}/></span> add to cart</button>}
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
                               features.map( (feature, index) =>
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