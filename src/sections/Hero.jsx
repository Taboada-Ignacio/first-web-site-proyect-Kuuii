import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; // <--- Importamos los datos centrales
import logoPrincipal from '../assets/logo-kuuii-2-sin fondo.jpg'; 
import './Hero.css';

const Hero = () => {
  // Generamos el enlace de WhatsApp usando los datos de config.js
  // Usamos 'phone.raw' (el número limpio) y 'messages.order' (el pedido con emojis)
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.phone.raw}?text=${encodeURIComponent(COMPANY_DATA.messages.order)}`;

  return (
    <section className="hero-section">
      <Container className="hero-content-animate">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9} className="text-center d-flex flex-column align-items-center">
            <img 
              src={logoPrincipal} 
              alt={COMPANY_DATA.name} 
              className="logo-hero-principal" 
            />
            
            <h1 className="hero-title">Agua de Mesa Purificada</h1>
            <p className="hero-slogan">"Naturalmente único..."</p>
            
            {/* Usamos el enlace directo al GPS definido en config.js */}
            <a 
              href={COMPANY_DATA.social.googleMapsDirect} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-location-link"
            >
              <p className="hero-location">
                <i className="bi bi-geo-alt-fill me-2"></i>
                {/* También podemos usar la ubicación desde la config si quisieras */}
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