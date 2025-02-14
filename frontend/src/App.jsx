import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home'
import Planes from './components/views/planes/Planes';
import Pacientes from './components/views/pacientes/Pacientes';
import Turnos from './components/views/turnos/Turnos';
import About from './components/views/about/About';
import Error404 from './components/views/error404/Error404';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/planes" element={<Planes />}/>
                <Route path="/pacientes" element={<Pacientes />}/>
                <Route path="/turnos" element={<Turnos />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<Error404 />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;