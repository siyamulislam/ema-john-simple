
import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    const handelAddProduct=()=>{
        fetch('http://localhost:5000/addProducts',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(fakeData)

        })
        .then(res => res.json())
        .then(result=>{
           if(result){
               console.log('Data added');
           }
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