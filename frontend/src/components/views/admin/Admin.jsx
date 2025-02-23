import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../../../routes/ProtectedRoutes"
import Pacientes from "./pacientes/Pacientes"
import Turnos from "./turnos/Turnos"
import CrearProducto from "./productos/CrearProducto"

const Admin = ()=> {
    return (
        <div>
            <h1>Panel de Administración</h1>
            <p>Bienvenido al panel de administración.</p>
            <Routes>
                <Route path="/pacientes" element={<ProtectedRoute><Pacientes /></ProtectedRoute>} />
                <Route path="/turnos" element={<ProtectedRoute><Turnos /></ProtectedRoute>}/>
                <Route path="/crear-producto" element={<ProtectedRoute><CrearProducto /></ProtectedRoute>}/>
            </Routes>
        </div>
    );
};

export default Admin;