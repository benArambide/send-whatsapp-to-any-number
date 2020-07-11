import React from 'react'
const HowItWorks = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="font-semibold text-xl mb-2">¿Cómo funciona?</h3>
      <p>Sólo seleccionar el código de país, ingresa el número celular, y dale a "Escribir Mensaje", automaticamente se abrirá Whatsapp listo para enviar el mensaje sin la necesidad de agregar el número como contacto.</p>
    </div>
  )
};

export default HowItWorks;
