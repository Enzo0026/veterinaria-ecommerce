import React from "react"
import { Routes, Route } from "react-router-dom"
import Admin from "../components/views/admin/Admin"
import Pacientes from "../components/views/admin/pacientes/Pacientes"
import Turnos from "../components/views/admin/turnos/Turnos"
import CrearProducto from "../components/views/admin/productos/CrearProducto"

function AdminRoutes(){
    return (
            <Routes>
                <Route path="/" element={<Admin />}></Route>
                <Route path="/pacientes" element={<Pacientes />}></Route>
                <Route path="/turnos" element={<Turnos />}></Route>
                <Route path="/productos" element={<CrearProducto />}></Route>
            </Routes>
    );
}

export default AdminRoutes;