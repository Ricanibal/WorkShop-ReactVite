import logoPeaku from '../static/icon/logo-peaku.png'; // Importa la imagen

import '../style/HeaderStyle.css';

export function Header() {
    return (
        <div className='HeaderPrincipal'>
            <header className='HeaderPrincipal'>
                <nav className='nav'>
                    <img src={logoPeaku} alt="logo-peaku.png" className="logoImage" />
                    <a href="#" className='Empleo'>LOGO</a>
                    <a href="#" className='Empleo'>LOGO</a>
                </nav>

            </header>
        </div>
    );
}

