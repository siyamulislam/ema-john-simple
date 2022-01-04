import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Review from './components/Reviews/Review';
import Inventory from './components/Inventory/Inventory';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  // document.title="New Title"
  return (
    <div className="App">

      <Header></Header> 
      <Router>
        <Routes> 
            <Route  path="/"                           element={<Shop/>}                 />  
            <Route  path="/shop"                       element={<Shop/>}                />  
            <Route  path="/review"                     element={<Review/>}               />  
            <Route  path="/inventory"                  element={<Inventory/>}            />
            <Route  path='/product/:productKey'        element={<ProductDetails/>}       />
            <Route  path="*"                           element={<NotFound/>}             />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
