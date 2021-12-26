import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)

    return (
        <div className='shop-container'>
            <div className="product-container">


                {
                    products.map(product =>
                        <Product  key={product.key} item={product}> </Product>)
                }

            </div>
            <div className="cart-container">
                <h1>Cart (0)</h1>
            </div>


        </div>
    );
};

export default Shop;