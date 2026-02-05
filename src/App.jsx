import React from 'react';
import './App.css';

// Importamos los componentes
import Navigation from './layout/Navigation'; 
import Hero from './sections/Hero';
import Services from './sections/Services';
import Location from './sections/Location';
import Footer from './layout/Footer';
import FloatingInvite from './components/FloatingInvite';

function App() {
  return (
    <div className="App">
      {/* 1. Header/Nav: Se queda afuera del main */}
      <Navigation /> 
      
      {/* 2. PUNTO 3 SOLUCIONADO: Etiqueta <main> envolviendo el contenido */}
      <main>
          <div id="inicio">
            <Hero />
          </div>
          
          <div id="productos">
            <Services />
          </div>
          
          {/* Location va dentro del flujo principal */}
          <Location /> 
      </main>

      {/* 3. Elementos auxiliares y Footer: Se quedan afuera del main */}
      <FloatingInvite />
      
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default App;