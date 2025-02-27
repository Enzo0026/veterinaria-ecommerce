import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) =>{
    const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser')) || null;

    if (!authenticatedUser || !authenticatedUser.isAdmin) {
        return <Navigate to={'/auth/login'} />;  // Redirige a Home si no está autenticado o no es admin
    } else {
        return children;  // Muestra las rutas de admin si está autenticado como admin
    }
};

export default ProtectedRoute;