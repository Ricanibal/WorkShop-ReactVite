import React from 'react'; // Asegúrate de importar React

import logoPeaku from '../static/icon/logo-peaku.png'; // Importa la imagen
import '../style/HeaderStyle.css';

export function Header() {
    
    return (
        <div className='HeaderPrincipal'>
            <header className='header'>
                <nav className='nav'>
                    <ul className='header-list'>
                        <li><img src={logoPeaku} alt="logo-peaku.png" className="logoPeaku"/></li>

                        <li className='list'><a href="#" className='Empleo'>Empleos</a></li>
                        <li className='list'><a href="#" className='Empleo'>Bootcamp</a></li>
                        <li className='list'><a href="#" className='Empleo'>Sobre nosotros</a></li>
                        <li className='list'><a href="#" className='Empleo'>Para profesionales</a></li>
                        <li className='list'><a href="#" className='Empleo'>Para empresas</a></li>
                        <li className='list'><a href="#" className='Empleo'>Idioma</a></li>
                        <li className='list'><a href="#" className='Empleo'>Notificaciones</a></li>
                        <li className='list'><a href="#" className='Empleo'>Perfil</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}


