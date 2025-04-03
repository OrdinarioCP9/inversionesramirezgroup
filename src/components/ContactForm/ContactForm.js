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

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Validación del nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        }

        // Validación del email con regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Por favor ingresa un email válido";
        }

        // Validación del teléfono
        const phoneRegex = /^\d{7,15}$/;
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio";
        } else if (!phoneRegex.test(formData.telefono.replace(/\D/g, ''))) {
            newErrors.telefono = "Ingresa un número telefónico válido";
        }

        // Validación del monto
        if (!formData.monto) {
            newErrors.monto = "Por favor selecciona un monto";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Eliminar error al escribir
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulación de envío
        setTimeout(() => {
            // Aquí iría la lógica real para enviar el formulario
            console.log('Datos del formulario:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Resetear el formulario después de 5 segundos
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    monto: '',
                    mensaje: ''
                });
            }, 5000);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <section className="contact-form-section" id="contacto">
                <div className="contact-container">
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h2>¡Gracias por tu interés!</h2>
                        <p>Hemos recibido tu información correctamente.</p>
                        <p>Un asesor especializado se pondrá en contacto contigo en las próximas 24 horas.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="contact-form-section" id="contacto">
            <div className="contact-container">
                <h2>¿Interesado en invertir con nosotros?</h2>
                <p className="form-subtitle">Completa el formulario y un asesor se pondrá en contacto contigo</p>

                <div className="form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo <span className="required">*</span></label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className={errors.nombre ? 'input-error' : ''}
                                required
                            />
                            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'input-error' : ''}
                                required
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono <span className="required">*</span></label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="Ej. 5512345678"
                                value={formData.telefono}
                                onChange={handleChange}
                                className={errors.telefono ? 'input-error' : ''}
                                required
                            />
                            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="monto">Monto aproximado a invertir <span className="required">*</span></label>
                            <select
                                id="monto"
                                name="monto"
                                value={formData.monto}
                                onChange={handleChange}
                                className={errors.monto ? 'input-error' : ''}
                                required
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="1000-5000">$1,000 - $5,000</option>
                                <option value="5001-10000">$5,001 - $10,000</option>
                                <option value="10001-50000">$10,001 - $50,000</option>
                                <option value="50001+">Más de $50,000</option>
                            </select>
                            {errors.monto && <p className="error-message">{errors.monto}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje (opcional)</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Cuéntanos más sobre lo que estás buscando..."
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="form-privacy">
                            <p>Al enviar este formulario, aceptas nuestra <a href="#">política de privacidad</a> y el uso de tus datos para contactarte.</p>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar información'}
                            {isSubmitting && <span className="spinner"></span>}
                        </button>
                    </form>

                    <div className="contact-info-box">
                        <h3>¿Prefieres contactarnos directamente?</h3>
                        <div className="contact-method">
                            <span className="contact-icon">📞</span>
                            <div>
                                <p className="contact-label">Teléfono:</p>
                                <p className="contact-value">(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="contact-method">
                            <span className="contact-icon">📧</span>
                            <div>
                                <p className="contact-label">Email:</p>
                                <p className="contact-value">contacto@inversionesgrupo.com</p>
                            </div>
                        </div>
                        <div className="contact-method">
                            <span className="contact-icon">🏢</span>
                            <div>
                                <p className="contact-label">Oficinas:</p>
                                <p className="contact-value">Calle Inversión 123, Ciudad</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq-section">
                    <h3>Preguntas frecuentes</h3>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h4>¿Cuál es la inversión mínima?</h4>
                            <p>Nuestros planes comienzan desde $1,000. El monto depende del tipo de inversión que desees realizar.</p>
                        </div>
                        <div className="faq-item">
                            <h4>¿Cómo puedo retirar mi inversión?</h4>
                            <p>Cada plan tiene diferentes términos de liquidez. Generalmente, puedes solicitar retiros según lo establecido en tu contrato.</p>
                        </div>
                        <div className="faq-item">
                            <h4>¿Es segura mi inversión?</h4>
                            <p>Todas nuestras inversiones cuentan con respaldo y seguros que protegen tu capital.</p>
                        </div>
                        <div className="faq-item">
                            <h4>¿Cuándo empiezo a ver rendimientos?</h4>
                            <p>Dependiendo del plan elegido, los rendimientos pueden ser mensuales, trimestrales o al final del periodo de inversión.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
