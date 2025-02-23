import React from "react";

const CrearProducto = () => {
    return (
        <div className="container mt-4">
            <h1>Gestión de productos</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" placeholder="Ej. Alimento para perros"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" placeholder="Ej. 5000"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea className="form-control" rows="3" placeholder="Descripción del producto"/>
                </div>
                <button type="submit" className="btn btn-warning mb-2">Guardar producto</button>
            </form>
        </div>
    );
};

export default CrearProducto;