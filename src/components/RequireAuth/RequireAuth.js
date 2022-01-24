import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { UserContext } from '../../App';
const RequireAuth = ({ children, ...rest }) => {
    
    const [loggedInUser] = useContext(UserContext);
    const auth = loggedInUser.email;
    const location = useLocation();
    
    return (
        auth === true
            ? children
            : <Navigate
                to="/login"
                replace state={{ path: location.pathname }}
                
                />
          
    );
};

export default RequireAuth;