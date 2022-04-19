import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Route } from "react-router-dom";


export const PublicRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props)=>(
                (isAuthenticated)
                    ? (<Navigate to='/' />)
                    : (<Component {...props} />)
            )} 
        >
            
        </Route>
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
