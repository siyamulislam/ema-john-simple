import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey}=useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/product/'+productKey,)
        .then(res=>res.json())
        .then(data=> {
            setProduct(data)
        })
    },[productKey])
    // const product= fakeData.find(pd=> pd.key===productKey); 
    return (
        <div>
            <h3>{productKey}Product Details</h3>
            <Product showAddCart={false} item={product}> </Product>
            </div>
    );
};

export default ProductDetails;