import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import Advantages from '../../components/Advantages/Advantages';
import UserExperiences from '../../components/UserExperiences/UserExperiences';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <section className="hero-section" id="inicio">
                <div className="hero-content">
                    <h1>Haz crecer tu patrimonio con inversiones seguras</h1>
                    <p>Más de 10 años de experiencia ayudando a nuestros clientes a alcanzar sus metas financieras</p>
                    <a href="#contacto" className="cta-button">Empieza a invertir</a>
                </div>
            </section>

            <Advantages />

            <section className="investment-options">
                <div className="investment-container">
                    <h2>Nuestras opciones de inversión</h2>
                    <p className="investment-subtitle">Tenemos un plan adecuado para cada perfil de inversor</p>

                    <div className="investment-cards">
                        <div className="investment-card">
                            <h3>Plan Básico</h3>
                            <p className="investment-return">Rendimiento anual: 8% - 10%</p>
                            <ul className="investment-features">
                                <li>Inversión mínima: $1,000</li>
                                <li>Plazo mínimo: 6 meses</li>
                                <li>Riesgo bajo</li>
                                <li>Liquidez mensual</li>
                            </ul>
                            <a href="#contacto" className="investment-button">Más información</a>
                        </div>

                        <div className="investment-card featured">
                            <div className="featured-label">Más popular</div>
                            <h3>Plan Crecimiento</h3>
                            <p className="investment-return">Rendimiento anual: 12% - 15%</p>
                            <ul className="investment-features">
                                <li>Inversión mínima: $5,000</li>
                                <li>Plazo mínimo: 12 meses</li>
                                <li>Riesgo moderado</li>
                                <li>Liquidez trimestral</li>
                            </ul>
                            <a href="#contacto" className="investment-button">Más información</a>
                        </div>

                        <div className="investment-card">
                            <h3>Plan Premium</h3>
                            <p className="investment-return">Rendimiento anual: 16% - 20%</p>
                            <ul className="investment-features">
                                <li>Inversión mínima: $25,000</li>
                                <li>Plazo mínimo: 24 meses</li>
                                <li>Riesgo controlado</li>
                                <li>Liquidez semestral</li>
                            </ul>
                            <a href="#contacto" className="investment-button">Más información</a>
                        </div>
                    </div>
                </div>
            </section>

            <UserExperiences />

            <ContactForm />

            <Footer />
        </div>
    );
};

export default Home;
