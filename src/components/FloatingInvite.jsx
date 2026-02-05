import React from 'react';
import { COMPANY_DATA } from '../config'; // <--- Importamos la configuración
import './FloatingInvite.css';
import mascot from '../assets/muñeco-kuuii-circular.jpg'; 

const FloatingInvite = () => {
  // Generamos el enlace usando el número raw y el mensaje de "visita web"
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.phone.raw}?text=${encodeURIComponent(COMPANY_DATA.messages.webVisit)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="floating-link"
      aria-label="Contactar por WhatsApp para realizar un pedido"
    >
      <div className="floating-container">
        <div className="invite-bubble-overlay">
          ¡¡Haz tu Pedido!!
        </div>
        <div className="mascot-wrapper">
          <img 
            src={mascot} 
            alt={`Mascota de ${COMPANY_DATA.name}`} 
            className="mascot-img-new" 
          />
        </div>
      </div>
    </a>
  );
};

export default FloatingInvite;