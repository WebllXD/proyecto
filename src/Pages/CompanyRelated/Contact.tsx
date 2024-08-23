import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <p>Si tienes alguna pregunta, sugerencia o necesitas asistencia, no dudes en contactarnos a través de los siguientes medios:</p>
      
      <h2>Teléfono</h2>
      <p>Llámanos al: <a href="tel:+123456789">+1 234 567 89</a></p>

      <h2>Email</h2>
      <p>Envíanos un correo electrónico a: <a href="mailto:contacto@peluqueria.com">contacto@peluqueria.com</a></p>

      <h2>Dirección</h2>
      <p>Visítanos en nuestra ubicación:</p>
      <p>Calle Falsa 123, Ciudad Ficticia, País de Ejemplo</p>

      <h2>Horario de Atención</h2>
      <p>Nuestro horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM.</p>
    </div>
  );
};

export default Contact;
