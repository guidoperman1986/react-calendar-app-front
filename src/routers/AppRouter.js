import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import { LoginScreen } from "../Components/Auth/LoginScreen";
import { CalendarScreen } from "../Components/Calendar/CalendarScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/"      element={<CalendarScreen />}   />

                    <Route path="*" element={<CalendarScreen />} />
                </Routes>
            </div>
        </Router>
    )
}
