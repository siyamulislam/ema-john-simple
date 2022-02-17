import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://powerful-castle-25731.herokuapp.com/products',)
            .then(res => res.json())
            .then(data => {
                const first10 = data.slice(0, 12);
                setProducts(first10)
            })
    }, [])
    useEffect(() => {
        const oldSavedCart = getDatabaseCart();
        const oldProductKeys = Object.keys(oldSavedCart);
        fetch('https://powerful-castle-25731.herokuapp.com/productsByKey', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(oldProductKeys)
        })
            .then(res => res.json())
            .then(data => { 
                const productWithQuantity = oldProductKeys.map(key => {
                    const product = data.find(product => (product.key === key));
                    product.quantity = oldSavedCart[key];
                    return product;
                }) 
                setCart(productWithQuantity)
            })
    }, [])
    //console.log(cart[0]);

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...otherProduct, sameProduct]
        }
        else {
            product.quantity = count
            newCart = [...cart, product]
        }
        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='twin-Container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product key={product.key} showAddCart={true} item={product} handleAddProduct={handleAddProduct}>  </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/review'}><button>Order Review</button></Link>
                </Cart>
            </div>


        </div>
    );
};

export default Shop;