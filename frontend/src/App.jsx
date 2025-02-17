import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigationbar from './components/layout/Navbar';
import Home from './components/views/Home/Home'
import Planes from './components/views/planes/Planes';
import Pacientes from './components/views/pacientes/Pacientes';
import Turnos from './components/views/turnos/Turnos';
import About from './components/views/about/About';
import Error404 from './components/views/error404/Error404';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div>
            <Navigationbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/planes" element={<Planes />}/>
                <Route path="/pacientes" element={<Pacientes />}/>
                <Route path="/turnos" element={<Turnos />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<Error404 />}/>
            </Routes>
            <main>

            </main>
            <Footer />
        </div>
    );
}

export default App;