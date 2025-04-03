import React from 'react';
import './UserExperiences.css';

const UserExperiences = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Carlos Rodríguez',
            position: 'Empresario',
            testimonial: 'He estado invirtiendo con InversionesGrupo durante 3 años y los resultados han superado mis expectativas. Su equipo profesional siempre está disponible para resolver cualquier duda.',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 2,
            name: 'Ana Martínez',
            position: 'Médico',
            testimonial: 'Comencé a invertir con un capital pequeño y gracias a la asesoría personalizada he podido incrementar mi patrimonio de manera significativa.',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            name: 'Roberto Gómez',
            position: 'Ingeniero',
            testimonial: 'Lo que más valoro es la transparencia y la comunicación constante. Siempre sé exactamente cómo está evolucionando mi inversión.',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
            id: 4,
            name: 'Laura Sánchez',
            position: 'Arquitecta',
            testimonial: 'La plataforma digital es muy intuitiva y me permite hacer seguimiento de mis inversiones desde cualquier lugar. Definitivamente recomiendo sus servicios.',
            avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
        }
    ];

    return (
        <section className="experiences-section" id="experiencias">
            <div className="experiences-container">
                <h2>Experiencias de nuestros inversores</h2>
                <p className="experiences-subtitle">Conoce las historias de éxito de quienes ya confían en nosotros</p>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserExperiences;
