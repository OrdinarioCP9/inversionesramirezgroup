import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('inicio');
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll y sección visible
    useEffect(() => {
        const handleScroll = () => {
            // Cambiar estilo del navbar al hacer scroll
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Detectar sección visible
            const sections = ['inicio', 'ventajas', 'experiencias', 'contacto'];
            let current = '';

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Ajustar para que considere cuando la sección está cerca de la parte superior
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            });

            if (current && current !== activeLink) {
                setActiveLink(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Detectar sección inicial
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeLink]);

    // Manejo del menú móvil
    const toggleMenu = () => {
        const nav = document.querySelector('.nav');
        const menuToggle = document.querySelector('.menu-toggle');
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    // Navegación suave entre secciones
    const handleScrollToSection = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setActiveLink(targetId.substring(1)); // Actualizar link activo
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#inicio" onClick={(e) => handleScrollToSection(e, '#inicio')}>
                        <span className="logo-text">Inversiones</span>
                        <span className="logo-highlight">Grupo</span>
                    </a>
                </div>

                <button className="menu-toggle" aria-label="Menú" onClick={toggleMenu}>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </button>

                <nav className="nav">
                    <ul className="nav-menu">
                        <li className={`nav-item ${activeLink === 'inicio' ? 'active' : ''}`}>
                            <a 
                                href="#inicio" 
                                className="nav-link"
                                onClick={(e) => handleScrollToSection(e, '#inicio')}
                            >
                                Inicio
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === 'ventajas' ? 'active' : ''}`}>
                            <a 
                                href="#ventajas" 
                                className="nav-link"
                                onClick={(e) => handleScrollToSection(e, '#ventajas')}
                            >
                                Ventajas
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === 'experiencias' ? 'active' : ''}`}>
                            <a 
                                href="#experiencias" 
                                className="nav-link"
                                onClick={(e) => handleScrollToSection(e, '#experiencias')}
                            >
                                Experiencias
                            </a>
                        </li>
                        <li className={`nav-item ${activeLink === 'contacto' ? 'active' : ''}`}>
                            <a 
                                href="#contacto" 
                                className="nav-link"
                                onClick={(e) => handleScrollToSection(e, '#contacto')}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
