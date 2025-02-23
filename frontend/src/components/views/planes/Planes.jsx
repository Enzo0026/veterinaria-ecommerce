import React from 'react';
import { Link } from 'react-router-dom';


//export const Planes = () => {
const Planes = () => {
  return (
    <div className="container mt-4 mb-4">
      <h1>Nuestros Planes</h1>
      <p>Elige el mejor plan para tu mascota y recibe los mejores cuidados.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-tittle">Primeros pasos</h5>
              <p className="card-text">Para mascotas de 0 a 5 años.</p>
              <Link to="/planes/detalle/primeros-pasos" className="btn btn-warning">Ver más</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-tittle">Madurando</h5>
              <p className="card-text">Para mascotas de 5 a 10 años.</p>
              <Link to="/planes/detalle/madurando" className="btn btn-warning">Ver más</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-tittle">Adultos</h5>
              <p className="card-text">Para mascotas de más de 10 años.</p>
              <Link to="/planes/detalle/primeros-pasos" className="btn btn-warning">Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
