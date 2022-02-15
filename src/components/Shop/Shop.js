import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // const first10 = fakeData.slice(0, 12); 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products',)
        .then(res=>res.json())
        .then(data=> {
            const first10=data.slice(0, 12);
            setProducts(first10)
        })
    },[])
    useEffect(() => {
        const oldSavedCart = getDatabaseCart();
        const oldProductKeys = Object.keys(oldSavedCart);
        // const oldCart = oldProductKeys.map(oldPdKey => fakeData.find(pd => pd.key === oldPdKey))
        const oldCart = oldProductKeys.map(oldPdKey => {
            const oldProduct = fakeData.find(pd => pd.key === oldPdKey)
            oldProduct.quantity = oldSavedCart[oldPdKey];
            return oldProduct;
        })
        setCart(oldCart)
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