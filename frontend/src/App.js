import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';
import Carrito from './componentes/Carrito';
import BotonWha from './componentes/BotonWha.js';

import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Catalogo from './paginas/Productos';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';
import CompraExitosa from './paginas/CompraExitosa';

import XBOXcatalogo from './productos/xboxCatalogo/XBOXcatalogo';
import Accionxbox from './productos/xboxCatalogo/Accionxbox';
import Carrerasxbox from './productos/xboxCatalogo/Carrerasxbox';
import Deportesxbox from './productos/xboxCatalogo/Deportesxbox';
import FPSxbox from './productos/xboxCatalogo/FPSxbox';
import Luchaxbox from './productos/xboxCatalogo/Luchaxbox';
import RPGxbox from './productos/xboxCatalogo/RPGxbox';

import PCcatalogo from './productos/pcCatalogo/PCcatalogo';
import AccionPC from './productos/pcCatalogo/AccionPC';
import CarrerasPC from './productos/pcCatalogo/CarrerasPC';
import DeportesPC from './productos/pcCatalogo/DeportesPC';
import FPSPC from './productos/pcCatalogo/FPSPC';
import LuchaPC from './productos/pcCatalogo/LuchaPC';
import RPGPC from './productos/pcCatalogo/RPGPC';

function App() {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setProductosEnCarrito([...productosEnCarrito, producto]);
    };

    return (
        <Router>
            <div>
                <Header /><br />
                <Navegation />
                <Routes>
                    <Route path="/carrito" element={<Carrito productosEnCarrito={productosEnCarrito} setProductosEnCarrito={setProductosEnCarrito} />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/catalogo/xbox" element={<XBOXcatalogo agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/accion" element={<Accionxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/carreras" element={<Carrerasxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/deportes" element={<Deportesxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/fps" element={<FPSxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/lucha" element={<Luchaxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/xbox/rpg" element={<RPGxbox agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc" element={<PCcatalogo agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/accion" element={<AccionPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/carreras" element={<CarrerasPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/deportes" element={<DeportesPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/fps" element={<FPSPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/lucha" element={<LuchaPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/catalogo/pc/rpg" element={<RPGPC agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/formEnviado" element={<FormEnviado />} />
                    <Route path="/compraExitosa" element={<CompraExitosa />} />
                </Routes>
                <BotonWha />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
