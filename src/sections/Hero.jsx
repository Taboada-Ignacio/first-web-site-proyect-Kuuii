import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; 
import logoPrincipal from '../assets/logo-kuuii-2-sin fondo.webp'; 
import './Hero.css';

const Hero = () => {
  // Generamos el enlace de WhatsApp usando los datos de config.js
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.phone.raw}?text=${encodeURIComponent(COMPANY_DATA.messages.order)}`;

  return (
    <section className="hero-section">
      <Container className="hero-content-animate">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9} className="text-center d-flex flex-column align-items-center">
            {/* CAMBIO: Agregamos width y height para evitar saltos (CLS) y mejorar rendimiento */}
            <img 
              src={logoPrincipal} 
              alt={COMPANY_DATA.name} 
              className="logo-hero-principal"
              width="188"
              height="126"
              fetchPriority="high"  // <--- AGREGA ESTA LÍNEA
            />
            
            <h1 className="hero-title">Agua de Mesa Purificada</h1>
            <p className="hero-slogan">"Naturalmente único..."</p>
            
            <a 
              href={COMPANY_DATA.social.googleMapsDirect} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-location-link"
              aria-label="Ver ubicación en Google Maps" // Agregué esto por si acaso para mejorar SEO
            >
              <p className="hero-location">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Encontranos en Comodoro Rivadavia - Chubut
              </p>
            </a>
            
            <Button 
              href={whatsappUrl} 
              target="_blank" 
              className="btn-pedido-whatsapp"
            >
              <i className="bi bi-whatsapp"></i> 
              <span>Realizar Pedido por WhatsApp</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;