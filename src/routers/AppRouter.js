import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Redirect,
    Route
} from 'react-router-dom';
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../Components/Auth/LoginScreen";
import { CalendarScreen } from "../Components/Calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    const dispatch = useDispatch();

    const { checking, uid } = useSelector(state=>state.auth)

    useEffect(() => {
      dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }
    


    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        exact 
                        path="/login" 
                        element={<LoginScreen />} 
                        isAuthenticated={ !!uid }
                    />
                    <Route 
                        exact 
                        path="/"      
                        element={<CalendarScreen />}   
                        isAuthenticated={ !!uid }
                    />

                    {/* <Redirect to='/' /> */}
                </Routes>
            </div>
        </Router>
    )
}
