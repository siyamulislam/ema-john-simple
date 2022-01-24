import React, { useContext } from 'react';
import { Link, Routes } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    const auth = loggedInUser.email;
    return (
        <Routes
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Link
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;