import React from 'react';
// import fakeData from '../../fakeData';
const Inventory = () => {
    
    document.title=" Inventory"
    const handelAddProduct=()=>{
        console.log('need to implementation');
        // fetch('http://localhost:5000/addProducts',{
        //     method:'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body:JSON.stringify(fakeData)
        // })
        // .then(res => res.json())
        // .then(result=>{
        //    if(result){
        //        console.log('Data added');
        //    }
        // })


    }
    return (
        <div>
            <form action=""> 
                <p><span>Name</span><input type="text" /></p>
                <p><span>Price</span><input type="text" /></p>
                <p><span>Quantity</span><input type="text" /></p>
                <p><span>Upload Image</span><input type="file" /></p>
            <button onClick={handelAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;