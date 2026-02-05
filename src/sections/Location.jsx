import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; 
import './Location.css'; 

// IMPORTANTE: Asegurate de tener esta imagen en assets
import mapCover from '../assets/mapa-cover.jpg'; 

const Location = () => {
  // Estado para el truco del mapa (Facade Pattern)
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="ubicacion" className="location-section py-5">
      <Container>
        <h2 className="location-main-title text-center mb-5">Nuestra Ubicación</h2>
        <Row className="justify-content-center align-items-center">
          
          {/* --- COLUMNA 1: INFORMACIÓN (Tu código original restaurado) --- */}
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <div className="contact-info-card text-center">
              <h3 className="distributor-name">{COMPANY_DATA.name}</h3>
              
              <div className="info-group">
                <i className="bi bi-geo-alt-fill icon-geo"></i>
                <p><strong>Dirección:</strong></p>
                {/* Enlace al GPS original restaurado */}
                <a 
                  href={COMPANY_DATA.social.googleMapsDirect} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <p className="mb-0 text-decoration-underline">{COMPANY_DATA.address}</p>
                  <small className="text-muted">(Clic para ir con GPS)</small>
                </a>
              </div>

              <div className="info-group">
                <i className="bi bi-clock-fill icon-clock"></i>
                <p><strong>Horarios:</strong><br/> Lunes a Sábados de 9:00 a 18:00 hs.</p>
              </div>

              <div className="info-group">
                <i className="bi bi-telephone-fill icon-phone"></i>
                <p><strong>Teléfonos:</strong></p>
                <span className="phone-number d-block">{COMPANY_DATA.phone.whatsapp}</span>
                <span className="phone-number d-block">{COMPANY_DATA.phone.primary}</span>
                <span className="phone-number d-block">{COMPANY_DATA.phone.secondary}</span>
              </div>
            </div>
          </Col>

          {/* --- COLUMNA 2: MAPA OPTIMIZADO (El truco para Best Practices) --- */}
          <Col lg={7} md={6}>
            <div className="map-container-wrapper shadow rounded overflow-hidden position-relative">
              
              {!showMap ? (
                // OPCIÓN A: LA FOTO DE PORTADA (No carga cookies, sube puntos)
                <div 
                  className="map-placeholder" 
                  style={{ 
                    backgroundImage: `url(${mapCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '450px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowMap(true)} // Al hacer clic, carga el mapa real
                >
                  <button className="btn btn-primary btn-lg shadow">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Ver Mapa Interactivo
                  </button>
                </div>
              ) : (
                // OPCIÓN B: EL MAPA REAL (Se carga solo al pedirlo)
                <iframe 
                  src={COMPANY_DATA.social.googleMapsEmbed} // Usa tu link de config
                  width="100%" 
                  height="450" 
                  className="google-map-iframe"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${COMPANY_DATA.name}`}
                ></iframe>
              )}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;