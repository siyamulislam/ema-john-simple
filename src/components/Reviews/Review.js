import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

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
        setCart(cartProduct)
    }, [])

    const removeItem = (productKey => {
        cart.map(product=> {
            // if(productKey===product.key && product.quantity>1){
            //     console.log(product.quantity);
            //        product.quantity -=product.quantity
            // }
            // else if(productKey===product.key && product.quantity===1) {  
            // }

            const newCart= cart.filter(pd=>pd.key!==productKey);
                setCart(newCart)
                removeFromDatabaseCart(productKey)
           
        } )
    })
    return (
        <div>
            <h2>Cart Item: {cart.length}</h2>
            {
                cart.map(cart => <ReviewItem removeItem={removeItem} key={cart.key} product={cart}> </ReviewItem>)
            }
        </div>
    );
};

export default Review;