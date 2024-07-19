import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Course } from "../pages/Course";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";

export function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<Course />}/>
                </Route>

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}