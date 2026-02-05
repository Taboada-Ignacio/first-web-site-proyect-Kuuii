import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo-kuuii-marca.jpg'; 
import './Navigation.css';

const Navigation = () => {

  // --- FUNCIÓN DE SCROLL PERSONALIZADO ---
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Evitamos el salto brusco estándar
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // CONFIGURACIÓN DE VELOCIDAD
    const duration = 260; // Tiempo en milisegundos (1.5 segundos). ¡Auméntalo para ir más lento!
    const offset = 130;    // El mismo espacio que dejamos en CSS para la barra

    // Cálculos de posición
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Función de animación (Efecto "Ease-in-out" para que arranque y frene suave)
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      // Fórmula matemática para suavizar el movimiento
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar-kuuii">
      <Container>
        {/* Logo con scroll suave al inicio */}
        <Navbar.Brand 
          href="#inicio" 
          onClick={(e) => handleSmoothScroll(e, '#inicio')}
        >
          <img
            src={logo}
            alt="Kuuii Logo"
            className="navbar-brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              href="#inicio" 
              className="nav-link-custom"
              onClick={(e) => handleSmoothScroll(e, '#inicio')}
            >
              Inicio
            </Nav.Link>
            
            <Nav.Link 
              href="#productos" 
              className="nav-link-custom"
              onClick={(e) => handleSmoothScroll(e, '#productos')}
            >
              Productos
            </Nav.Link>
            
            <Nav.Link 
              href="#ubicacion" 
              className="nav-link-custom"
              onClick={(e) => handleSmoothScroll(e, '#ubicacion')}
            >
              Ubicación
            </Nav.Link>
            
            <Nav.Link 
              href="#contacto" 
              className="nav-link-custom"
              onClick={(e) => handleSmoothScroll(e, '#contacto')}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;