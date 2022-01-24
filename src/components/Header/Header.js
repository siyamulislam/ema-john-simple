import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    const [loggedInUser]=useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link> 
                <Link to="/inventory">Manage Inventory</Link> <span className='text-success  ml-4'><small>Welcome, {loggedInUser.name}</small></span> 
                <Link to='/'><small>LogOut</small></Link> </nav>
        </div>
    ); 
};

export default Header;