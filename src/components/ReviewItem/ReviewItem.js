import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faStar, faRemoveFormat } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = (props) => {
    const { img, name, seller, price, stock, features, key, quantity } = props.product;
    return (
        <div className='product' >
            <div >
                <img src={img} alt="" />
            </div>
            <div className='product_details'>
                <div className='product-header'>
                    <h4 className="product-title"> {name}   </h4>
                    <p><small>by: {seller}</small></p>
                </div>
                <div className="product-description">
                    <div className='des-left'>
                        {<p><small>Quantity {quantity} pics </small></p>}
                        <p><small>${(price * quantity||1).toFixed(2)}</small></p>
                        <br />
                        {<button onClick={() => { props.removeItem(key) }}>
                            <span><FontAwesomeIcon icon={faRemoveFormat} /></span> remove</button>}
                    </div>
                    <div className='des-right'>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <h4>Feature</h4>
                        <ul>
                            {
                                features.map((feature, index) =>
                                    <li key={index}>{feature.description} <strong>{feature.value}</strong> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;