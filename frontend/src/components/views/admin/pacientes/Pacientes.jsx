import React from "react";

const Pacientes = () => {
  return (
    <div className="container mt-4">
      <h1>Gestión de pacientes</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th colSpan="4">Datos del Dueño</th>
              <th colSpan="3">Datos de la Mascota</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Nombre Mascota</th>
              <th>Especie</th>
              <th>Raza</th>
            </tr>
          </thead>
          <tbody>{/* Lista de pacientes */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Pacientes;
