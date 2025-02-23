import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigationbar from './components/layout/Navbar';
import Home from './components/views/Home/Home'
import Planes from './components/views/planes/Planes';
import About from './components/views/about/About';
import Error404 from './components/views/error404/Error404';
import Footer from './components/layout/Footer';
import AdminRoutes from './routes/AdminRoutes';

function App() {
    
    return (
        <BrowserRouter>
            <Navigationbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/planes" element={<Planes />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Error404 />}/>
                    <Route path="/admin/*" element={<AdminRoutes />}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;