import { useContext } from "react";
import { Context } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const context = useContext(Context)

    return context?.authenticated ? <Outlet /> : <Navigate to="/login" />
}