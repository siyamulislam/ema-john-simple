import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    const [loggedInUser]=useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className='Header'>
            <img src={logo} alt="" />

            <nav><a href="/shop">Shop</a><a href="/review">Order Review</a> <a href="/inventory">Manage Inventory</a> <span className='text-success  ml-4'><small>Welcome, {loggedInUser.name}</small></span> <a href='/'><small>LogOut</small></a> </nav>
        </div>
    ); 
};

export default Header;