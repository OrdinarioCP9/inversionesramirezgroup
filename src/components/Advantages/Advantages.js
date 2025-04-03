import React from 'react';
import './Advantages.css';

const Advantages = () => {
    const advantagesList = [
        {
            id: 1,
            icon: '📈',
            title: 'Rentabilidad Superior',
            description: 'Nuestros planes de inversión ofrecen rendimientos por encima del promedio del mercado.'
        },
        {
            id: 2,
            icon: '🛡️',
            title: 'Inversiones Seguras',
            description: 'Todos nuestros productos cuentan con respaldo y seguridad garantizada.'
        },
        {
            id: 3,
            icon: '💼',
            title: 'Diversificación',
            description: 'Múltiples opciones para diversificar tu portafolio y minimizar riesgos.'
        },
        {
            id: 4,
            icon: '👨‍💼',
            title: 'Asesoría Personalizada',
            description: 'Contamos con expertos financieros que te guiarán durante todo el proceso.'
        },
        {
            id: 5,
            icon: '📱',
            title: 'Plataforma Digital',
            description: 'Administra tus inversiones desde cualquier dispositivo, en cualquier momento.'
        },
        {
            id: 6,
            icon: '📊',
            title: 'Informes Detallados',
            description: 'Recibe informes periódicos sobre el rendimiento de tus inversiones.'
        }
    ];

    return (
        <section className="advantages-section" id="ventajas">
            <div className="advantages-container">
                <h2>Ventajas de invertir con nosotros</h2>
                <p className="advantages-subtitle">Descubre por qué somos la mejor opción para hacer crecer tu patrimonio</p>

                <div className="advantages-grid">
                    {advantagesList.map(advantage => (
                        <div className="advantage-card" key={advantage.id}>
                            <div className="advantage-icon">{advantage.icon}</div>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
