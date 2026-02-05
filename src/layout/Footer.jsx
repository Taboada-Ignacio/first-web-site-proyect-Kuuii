import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { COMPANY_DATA } from '../config'; // <--- IMPORTANTE: Importamos los datos
import './Footer.css';

const Footer = () => {
  // Generamos el link usando los datos centrales
  const linkWspFooter = `https://wa.me/${COMPANY_DATA.phone.raw}?text=${encodeURIComponent(COMPANY_DATA.messages.general)}`;

  return (
    <footer className="footer-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-4">
            <h5>{COMPANY_DATA.name.toUpperCase()}</h5>
            <p>Producto Patagónico de Tierra Santa</p>
            <p className="small">{COMPANY_DATA.address}</p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>CONTACTO DIRECTO</h5>
            <div className="d-flex flex-column align-items-center">
              <span><i className="bi bi-whatsapp me-2"></i>{COMPANY_DATA.phone.whatsapp}</span>
              <span><i className="bi bi-telephone-fill me-2"></i>{COMPANY_DATA.phone.primary}</span>
              <span><i className="bi bi-telephone-fill me-2"></i>{COMPANY_DATA.phone.secondary}</span>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <h5>SEGUINOS</h5>
            <div className="social-icons">
              <a href={COMPANY_DATA.social.facebook} target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              
              <a href={COMPANY_DATA.social.instagram} target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>

              <a href={linkWspFooter} target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
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