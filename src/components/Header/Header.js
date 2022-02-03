import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser.name);
     
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link> 
                <Link to="/inventory">Manage Inventory</Link> 
                <span className='text-success  ml-4'><small>{loggedInUser.name? 'Welcome, '+loggedInUser.name:''} </small></span> 
                {
                    loggedInUser.name? 
                    <small> <button onClick={()=>setLoggedInUser({})}>Sign Out</button> </small>
                    // <Link  to='/shop'onClick={()=>setLoggedInUser({})}>Check In</Link> 
                    :
                    <Link  to='/login'>Sign In</Link> 
                } 
                
               {/* {loggedInUser.name?  <Link  onClick={handelSignOut}><small>Sign Out</small></Link>: <Link  to='/login'><small>Sign In</small></Link>} */}

            </nav>
        </div>
    ); 
};

export default Header;