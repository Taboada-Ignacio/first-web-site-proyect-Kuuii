import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

// --- IMPORTANTE: REEMPLAZA ESTOS NOMBRES POR LOS DE TUS IMÁGENES REALES ---
// Asegúrate de que las imágenes estén en la carpeta src/assets/
import imgAgua from '../assets/icono-agua.jpg';     // <-- Tu imagen para agua
import imgHielo from '../assets/icono-hielo.jpg';   // <-- Tu imagen para hielo
import imgPremium from '../assets/icono-premium.jpg'; // <-- Tu imagen para calidad

const Services = () => {
  const productos = [
    {
      id: 1,
      titulo: "Agua de Mesa",
      descripcion: "Bidones de 20 Lts con proceso de purificación de alta calidad.",
      detalle: "Ph 7.35 | Bajo en Sodio",
      // CAMBIO: Ahora usamos la variable de la imagen importada
      imagenSrc: imgAgua 
    },
    {
      id: 2,
      titulo: "Hielo Kuuii",
      descripcion: "Hielo cristalino elaborado con agua purificada.",
      detalle: "Bolsas por kilo para eventos",
      // CAMBIO: Imagen importada
      imagenSrc: imgHielo
    },
    {
      id: 3,
      titulo: "Calidad Premium",
      descripcion: "Producto Patagónico elaborado bajo estrictas normas de higiene.",
      detalle: "100% Puro",
      // CAMBIO: Imagen importada
      imagenSrc: imgPremium
    }
  ];

  return (
    <section className="services-section" id="productos">
      <Container>
        <h2 className="services-title text-center">Nuestros Productos</h2>
        <Row className="justify-content-center g-4 services-row">
          {productos.map((prod) => (
            <Col key={prod.id} xs={12} md={4} className="d-flex justify-content-center">
              <Card className="service-card text-center h-100">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {/* CAMBIO: Reemplazamos el <i> por un <img> */}
                  <div className="service-icon-container">
                    <img 
                      src={prod.imagenSrc} 
                      alt={prod.titulo} 
                      className="service-img" 
                    />
                  </div>
                  <Card.Title as="h3" className="fw-bold">{prod.titulo}</Card.Title>
                  <Card.Text>{prod.descripcion}</Card.Text>
                  <span className="badge-detalle">{prod.detalle}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;