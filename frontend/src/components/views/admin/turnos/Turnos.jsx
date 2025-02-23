import React from 'react';

const Turnos = () => {
  return (
    <div className="container mt-4">
      <h1>Gestión de turnos</h1>
      <p>Turnos programados</p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Mascota</th>
              <th>Veterinario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se cargarán los turnos */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Turnos;
