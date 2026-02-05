import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; 
import './Footer.css';

const Footer = () => {
  const linkWspFooter = `https://wa.me/${COMPANY_DATA.phone.raw}?text=${encodeURIComponent(COMPANY_DATA.messages.general)}`;

  return (
    <footer className="footer-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-4">
            {/* CAMBIO: De h5 a h4 para respetar la jerarquía */}
            <h4>{COMPANY_DATA.name.toUpperCase()}</h4>
            <p>Producto Patagónico de Tierra Santa</p>
            <p className="small">{COMPANY_DATA.address}</p>
          </Col>
          
          <Col md={4} className="mb-4">
            {/* CAMBIO: De h5 a h4 */}
            <h4>CONTACTO DIRECTO</h4>
            <div className="d-flex flex-column align-items-center">
              <span><i className="bi bi-whatsapp me-2"></i>{COMPANY_DATA.phone.whatsapp}</span>
              <span><i className="bi bi-telephone-fill me-2"></i>{COMPANY_DATA.phone.primary}</span>
              <span><i className="bi bi-telephone-fill me-2"></i>{COMPANY_DATA.phone.secondary}</span>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            {/* CAMBIO: De h5 a h4 */}
            <h4>SEGUINOS</h4>
            <div className="social-icons">
               {/* ... tus iconos con aria-label (que ya están perfectos) ... */}
               <a href={COMPANY_DATA.social.facebook} aria-label="Visitar nuestro Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
               <a href={COMPANY_DATA.social.instagram} aria-label="Visitar nuestro Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
               <a href={linkWspFooter} aria-label="Enviar mensaje por WhatsApp" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center copyright">© 2025 {COMPANY_DATA.name} - {COMPANY_DATA.location}</p>
      </Container>
    </footer>
  );
};

export default Footer;