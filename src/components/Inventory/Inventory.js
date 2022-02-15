
import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    const handelAddProduct=()=>{
        fetch('http://localhost:5000/addProducts',{
            method:'POST',
            headers:{'COntent_TYPE': 'application/json'},
            body:JSON.stringify(fakeData[0])

        })
    }
    return (
        <div>
            <h1>Hi Inventory</h1>
            <button onClick={handelAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;