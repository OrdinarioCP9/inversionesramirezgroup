import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        monto: '',
        tipoInversion: '',
        mensaje: '',
        aceptaTerminos: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const tiposInversion = [
        { value: 'plan_basico', label: 'Plan Básico (8-10%)' },
        { value: 'plan_crecimiento', label: 'Plan Crecimiento (12-15%)' },
        { value: 'plan_premium', label: 'Plan Premium (16-20%)' },
        { value: 'todos', label: 'Quiero conocer todos los planes' }
    ];

    const validateForm = () => {
        const newErrors = {};
        
        // Validación del nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        } else if (formData.nombre.trim().length < 3) {
            newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
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
            newErrors.monto = "Por favor selecciona un monto de inversión";
        }

        // Validación del tipo de inversión
        if (!formData.tipoInversion) {
            newErrors.tipoInversion = "Por favor selecciona un tipo de inversión";
        }

        // Validación de términos y condiciones
        if (!formData.aceptaTerminos) {
            newErrors.aceptaTerminos = "Debes aceptar los términos y condiciones";
        }
        
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        
        setFormData(prevState => ({
            ...prevState,
            [name]: val
        }));
        
        // Eliminar error al escribir
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            
            // Hacer scroll al primer error
            const firstErrorField = Object.keys(validationErrors)[0];
            const errorElement = document.getElementById(firstErrorField);
            if (errorElement) {
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                errorElement.focus();
            }
            
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulación de envío
        setTimeout(() => {
            console.log('Datos del formulario:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            // Resetear el formulario después de 6 segundos
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    monto: '',
                    tipoInversion: '',
                    mensaje: '',
                    aceptaTerminos: false
                });
            }, 6000);
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <section className="contact-form-section" id="contacto">
                <div className="contact-container">
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h2>¡Gracias por tu interés, {formData.nombre}!</h2>
                        <p>Hemos recibido tu información correctamente.</p>
                        <p className="highlight-text">Un asesor especializado se pondrá en contacto contigo en las próximas 24 horas.</p>
                        <div className="success-details">
                            <div className="success-detail">
                                <span className="detail-label">Email:</span>
                                <span className="detail-value">{formData.email}</span>
                            </div>
                            <div className="success-detail">
                                <span className="detail-label">Teléfono:</span>
                                <span className="detail-value">{formData.telefono}</span>
                            </div>
                            <div className="success-detail">
                                <span className="detail-label">Monto de inversión:</span>
                                <span className="detail-value">
                                    {(() => {
                                        switch(formData.monto) {
                                            case '1000-5000': return '$1,000 - $5,000';
                                            case '5001-10000': return '$5,001 - $10,000';
                                            case '10001-50000': return '$10,001 - $50,000';
                                            case '50001+': return 'Más de $50,000';
                                            default: return 'No especificado';
                                        }
                                    })()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="contact-form-section" id="contacto">
            <div className="contact-container">
                <h2>¿Interesado en invertir con nosotros?</h2>
                <p className="form-subtitle">Completa el formulario y un asesor especializado se pondrá en contacto contigo</p>

                <div className="form-container">
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className={`form-group ${focusedField === 'nombre' ? 'focused' : ''} ${errors.nombre ? 'error' : ''}`}>
                            <label htmlFor="nombre">
                                <i className="form-icon user-icon"></i>
                                Nombre completo <span className="required">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                onFocus={() => handleFocus('nombre')}
                                onBlur={handleBlur}
                                className={errors.nombre ? 'input-error' : ''}
                                placeholder="Ingresa tu nombre completo"
                                required 
                            />
                            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                        </div>
                        
                        <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
                            <label htmlFor="email">
                                <i className="form-icon email-icon"></i>
                                Correo electrónico <span className="required">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                className={errors.email ? 'input-error' : ''}
                                placeholder="Ej. nombre@correo.com"
                                required 
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        
                        <div className={`form-group ${focusedField === 'telefono' ? 'focused' : ''} ${errors.telefono ? 'error' : ''}`}>
                            <label htmlFor="telefono">
                                <i className="form-icon phone-icon"></i>
                                Teléfono <span className="required">*</span>
                            </label>
                            <input 
                                type="tel" 
                                id="telefono" 
                                name="telefono"
                                placeholder="Ej. 5512345678"
                                value={formData.telefono}
                                onChange={handleChange}
                                onFocus={() => handleFocus('telefono')}
                                onBlur={handleBlur}
                                className={errors.telefono ? 'input-error' : ''}
                                required 
                            />
                            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
                        </div>
                        
                        <div className="form-row">
                            <div className={`form-group ${focusedField === 'monto' ? 'focused' : ''} ${errors.monto ? 'error' : ''}`}>
                                <label htmlFor="monto">
                                    <i className="form-icon money-icon"></i>
                                    Monto aproximado a invertir <span className="required">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select 
                                        id="monto" 
                                        name="monto"
                                        value={formData.monto}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('monto')}
                                        onBlur={handleBlur}
                                        className={errors.monto ? 'input-error' : ''}
                                        required
                                    >
                                        <option value="">Selecciona un monto</option>
                                        <option value="1000-5000">$1,000 - $5,000</option>
                                        <option value="5001-10000">$5,001 - $10,000</option>
                                        <option value="10001-50000">$10,001 - $50,000</option>
                                        <option value="50001+">Más de $50,000</option>
                                    </select>
                                </div>
                                {errors.monto && <p className="error-message">{errors.monto}</p>}
                            </div>
                            
                            <div className={`form-group ${focusedField === 'tipoInversion' ? 'focused' : ''} ${errors.tipoInversion ? 'error' : ''}`}>
                                <label htmlFor="tipoInversion">
                                    <i className="form-icon investment-icon"></i>
                                    Tipo de inversión <span className="required">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select 
                                        id="tipoInversion" 
                                        name="tipoInversion"
                                        value={formData.tipoInversion}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('tipoInversion')}
                                        onBlur={handleBlur}
                                        className={errors.tipoInversion ? 'input-error' : ''}
                                        required
                                    >
                                        <option value="">Selecciona un plan</option>
                                        {tiposInversion.map(tipo => (
                                            <option key={tipo.value} value={tipo.value}>
                                                {tipo.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.tipoInversion && <p className="error-message">{errors.tipoInversion}</p>}
                            </div>
                        </div>
                        
                        <div className={`form-group ${focusedField === 'mensaje' ? 'focused' : ''}`}>
                            <label htmlFor="mensaje">
                                <i className="form-icon message-icon"></i>
                                Mensaje (opcional)
                            </label>
                            <textarea 
                                id="mensaje" 
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                onFocus={() => handleFocus('mensaje')}
                                onBlur={handleBlur}
                                placeholder="Cuéntanos más sobre lo que estás buscando o cualquier pregunta que tengas..."
                                rows="4"
                            ></textarea>
                        </div>
                        
                        <div className={`form-checkbox ${errors.aceptaTerminos ? 'error' : ''}`}>
                            <input
                                type="checkbox"
                                id="aceptaTerminos"
                                name="aceptaTerminos"
                                checked={formData.aceptaTerminos}
                                onChange={handleChange}
                            />
                            <label htmlFor="aceptaTerminos">
                                Acepto los <a href="/terminos-condiciones">términos y condiciones</a> y la <a href="/politica-privacidad">política de privacidad</a>
                            </label>
                            {errors.aceptaTerminos && <p className="error-message">{errors.aceptaTerminos}</p>}
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                <>
                                    <i className="btn-icon send-icon"></i>
                                    <span>Enviar información</span>
                                </>
                            )}
                        </button>
                        
                        <div className="data-security-notice">
                            <i className="security-icon"></i>
                            <p>Tus datos están protegidos y nunca serán compartidos con terceros sin tu autorización.</p>
                        </div>
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
                            <div className="contact-icon-wrapper">
                                <i className="contact-icon fa fa-envelope"></i>
                            </div>
                            <div className="contact-info">
                                <p className="contact-label">Email</p>
                                <p className="contact-value">contacto@inversionesramirezgroup.com</p>
                            </div>
                        </div>
                        <div className="contact-method">
                            <span className="contact-icon">🏢</span>
                            <div>
                                <p className="contact-label">Oficinas:</p>
                                <p className="contact-value">Calle Inversión 123, Ciudad</p>
                            </div>
                        </div>

                        <div className="availability-info">
                            <h4>Horario de atención</h4>
                            <div className="availability-hours">
                                <p><span className="day">Lunes a Viernes:</span> <span className="hours">9:00 - 18:00</span></p>
                                <p><span className="day">Sábados:</span> <span className="hours">9:00 - 14:00</span></p>
                                <p><span className="day">Domingos:</span> <span className="hours">Cerrado</span></p>
                            </div>
                        </div>

                        <div className="response-time">
                            <div className="response-icon"></div>
                            <p>Tiempo promedio de respuesta: <strong>2 horas</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
