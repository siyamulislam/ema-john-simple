import React, { useEffect, useState } from 'react';

// import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyGIF from '../../images/wow.gif'
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced,] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);

        fetch('https://powerful-castle-25731.herokuapp.com/productsByKey', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productKey)
        })
            .then(res => res.json())
            .then(data => {
                const productWithQuantity = productKey.map(key => {
                    const product = data.find(product => (product.key === key));
                    product.quantity = savedCart[key];
                    return product;
                })
                // console.log(productWithQuantity);
                setCart(productWithQuantity)
            })

        // const cartProduct = productKey.map(key => {
        //     const product = fakeData.find(pd => pd.key === key);
        //     product.quantity = savedCart[key];
        //     return product;
        // })
        // setCart(cartProduct)
    }, [])

    const removeItem = (productKey => {
        cart.map(product => {
            // if(productKey===product.key && product.quantity>1){
            //     console.log(product.quantity);
            //        product.quantity -=product.quantity
            // }
            // else if(productKey===product.key && product.quantity===1) {  
            // }

            const newCart = cart.filter(pd => pd.key !== productKey);
            setCart(newCart);
            return removeFromDatabaseCart(productKey);
        })
    })
    //copy 
    const handleProceedCheckout = () => {
        navigate("/shipment");
    }
    return (
        !orderPlaced ?
            <div className='twin-Container'>
                <div className="product-container">
                    {
                        cart.map(cart => <ReviewItem removeItem={removeItem} key={cart.key} product={cart}> </ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout}>Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
            :
            <div>
                <img src={happyGIF} alt="" />
                <h1>Order placed ! Stay Relaxed</h1>
            </div>
    );
};

export default Review;