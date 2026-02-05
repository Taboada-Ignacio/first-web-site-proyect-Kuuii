import React from 'react';
import './App.css';

// Importamos los componentes
import Navigation from './layout/Navigation'; // <--- NUEVO
import Hero from './sections/Hero';
import Services from './sections/Services';
import Location from './sections/Location';
import Footer from './layout/Footer';
import FloatingInvite from './components/FloatingInvite';

function App() {
  return (
    <div className="App">
      <Navigation /> {/* <--- La barra va arriba de todo */}
      <FloatingInvite />
      
      {/* Agregamos IDs para que el menú funcione */}
      <div id="inicio">
        <Hero />
      </div>
      
      <div id="productos">
        <Services />
      </div>
      
      {/* Location ya tenía id="ubicacion" internamente, pero lo reforzamos aquí o usamos el suyo */}
      <Location /> 
      
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default App;