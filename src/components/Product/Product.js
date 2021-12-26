import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.item)
    return (
        <div className='product'>
            <div>
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
                        <button> add to cart</button>
                    </div>
                    <div className='des-right'>
                        <span>rating star</span>
                        <h4>Feature</h4>
                        <ul>
                            {
                                props.item.features.map(feature =>
                                    <li key={feature[0]}>{feature.description} <strong>{feature.value}</strong> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;