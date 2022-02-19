import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    const [loading , setLoading]= useState(true);
    document.title="Product Details"
    useEffect(() => {
        fetch('https://powerful-castle-25731.herokuapp.com/product/' + productKey,)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [productKey])
    // const product= fakeData.find(pd=> pd.key===productKey); 
    return (
        <div>
            {loading? <h3>Loading Product Details</h3>:  <h3>{productKey}Product Details</h3>}
            {loading?  <CircularProgress /> :   <Product showAddCart={false} item={product}> </Product>}
          
          
        </div>
    );
};

export default ProductDetails;