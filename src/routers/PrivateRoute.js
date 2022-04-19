import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Route } from "react-router-dom";


export const PrivateRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props)=>(
                (isAuthenticated)
                    ? ( <Component {...props} /> )
                    : ( <Navigate to='/login' /> )
            )} 
        >
            
        </Route>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
