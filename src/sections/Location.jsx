import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; // <--- Importamos la configuración
import './Location.css'; 

const Location = () => {
  return (
    <section id="ubicacion" className="location-section py-5">
      <Container>
        <h2 className="location-main-title text-center mb-5">Nuestra Ubicación</h2>
        <Row className="justify-content-center align-items-center">
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <div className="contact-info-card text-center">
              {/* Usamos el nombre de la empresa desde la config */}
              <h3 className="distributor-name">{COMPANY_DATA.name}</h3>
              
              <div className="info-group">
                <i className="bi bi-geo-alt-fill icon-geo"></i>
                <p><strong>Dirección:</strong></p>
                {/* Enlace al GPS usando la URL centralizada */}
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
                {/* Teléfonos centralizados */}
                <span className="phone-number">{COMPANY_DATA.phone.whatsapp}</span>
                <span className="phone-number">{COMPANY_DATA.phone.primary}</span>
                <span className="phone-number">{COMPANY_DATA.phone.secondary}</span>
              </div>
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className="map-container-wrapper">
              <iframe 
                src={COMPANY_DATA.social.googleMapsEmbed} // <--- URL del mapa centralizada
                width="100%" 
                height="450" 
                className="google-map-iframe"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${COMPANY_DATA.name}`}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;