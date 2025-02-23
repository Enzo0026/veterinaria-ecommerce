import React from 'react';

const About = () => {
  return (
    <div className='container mt-4'>
      <h1>Acerca de nosotros</h1>
      <p>Equipo de desarrollo</p>

      <div className='row mt-4'>
        {/* Galería de fotos o avatares de los miembros */}
        <div className='col-md-4'>
          <img src="" alt="Miembro del equipo" className='img-fluid rounded-circle'/>
          <p>Nombre del desarrollador</p>
        </div>
      </div>
    </div>
  );
};

export default About;
