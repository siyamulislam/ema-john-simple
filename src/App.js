import './App.css';
import {React,createContext, useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header         from './components/Header/Header';
import Shop           from './components/Shop/Shop';
import Review         from './components/Reviews/Review';
import Inventory      from './components/Inventory/Inventory';
import NotFound       from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shipment       from './components/Shipment/Shipment';
import Login          from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

export const UserContext= createContext('');
function App() {
  // document.title="New Title";
  
const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <div className="App">
        <Router>
        <Header></Header> 
          <Routes> 
              <Route  path="/"                          element={<Shop/>}                                             />  
              <Route  path="/shop"                      element={<Shop/>}                                             />  
              <Route  path="/review"                    element={<Review/>}                                           />  
              <Route  path="/inventory"                 element={<RequireAuth><Inventory/></RequireAuth>}             />
              <Route  path="/shipment"                  element={<RequireAuth><Shipment/></RequireAuth> }             />
              <Route  path="/login"                     element={<Login/>}                                            />
              <Route  path='/product/:productKey'       element={<ProductDetails/>}                                   />
              <Route  path="*"                          element={<NotFound/>}                                         />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
