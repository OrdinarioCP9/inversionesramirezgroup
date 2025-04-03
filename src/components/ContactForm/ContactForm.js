import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    monto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      monto: '',
      mensaje: ''
    });
  };

  return (
    <section className="contact-form-section" id="contacto">
      <div className="contact-container">
        <h2>¿Interesado en invertir con nosotros?</h2>
        <p className="form-subtitle">Completa el formulario y un asesor se pondrá en contacto contigo</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="monto">Monto aproximado a invertir</label>
            <select 
              id="monto" 
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5001-10000">$5,001 - $10,000</option>
              <option value="10001-50000">$10,001 - $50,000</option>
              <option value="50001+">Más de $50,000</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje (opcional)</label>
            <textarea 
              id="mensaje" 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Enviar información</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
