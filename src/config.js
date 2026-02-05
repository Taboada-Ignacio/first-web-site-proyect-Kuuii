/* src/config.js */

export const COMPANY_DATA = {
  name: "Kuuii Agua y Hielo",
  location: "Comodoro Rivadavia, Chubut",
  address: "San Martín 1857, Barrio Jorge Newbery",
  
  // Datos de contacto
  phone: {
    primary: "(0297) 4067292", // Cómo se ve en pantalla
    raw: "542974067292",       // El número para el link de WhatsApp
    secondary: "(0297) 4442837",
    whatsapp: "(0297) 154359320"
  },

  // Redes Sociales y Mapas
  social: {
    facebook: "https://www.facebook.com/kuuii",
    instagram: "https://www.instagram.com/kuuii_agua", // Ejemplo
    googleMapsSearch: "maps.google.com", // Tu link de búsqueda
    googleMapsEmbed: "https://maps.google.com/maps?q=Kuuii%20Agua%20y%20Hielo%2C%20San%20Mart%C3%ADn%201857%2C%20Comodoro%20Rivadavia&t=&z=15&ie=UTF8&iwloc=&output=embed", // Tu iframe src
    googleMapsDirect: "https://www.google.com/maps/place/Kuuii+Agua+y+Hielo/@-45.8609399,-67.5027802,17z/data=!3m1!4b1!4m6!3m5!1s0xbde4553b25d11c17:0x6593a5a7ca32d187!8m2!3d-45.8609399!4d-67.5027802!16s%2Fg%2F11y2h8_x5_?entry=ttu" // Tu link directo al GPS
  },

  // Mensajes predefinidos de WhatsApp
  messages: {
    order: "¡Hola Kuuii! Quisiera realizar un pedido de agua/hielo en mi dirección...",
    general: "Hola, tengo una consulta sobre sus servicios.",
    webVisit: "¡Hola! Estoy viendo su web y quiero hacer un pedido"
  }
};