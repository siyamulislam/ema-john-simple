import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const productQuantity = Object.values(savedCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        }
        )
        setCart(...cart+cartProduct)
    }, [])
    console.log(cart);
    return (
        <div>
            <h2>{cart.length}</h2>
            <h2>Lets Play Guys! </h2>
        </div>
    );
};

export default Review;