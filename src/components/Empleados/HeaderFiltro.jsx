import React, { useState } from 'react';
import '../../style/HeaderStyle.css';


export function HeaderFiltro() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
      <div className='HeaderWork'>
        <ul className='nav'>
          <li>
          <button className={`nav-button ${isOpen ? 'isOpen' : ''}`} onClick={toggleMenu}>Área</button>
          {isOpen && (
            <ul className='dropdown-menu'>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          )}
            
          </li>
          <li><a href='#'>Cargo</a></li>
          <li><a href='#'>Salario</a></li>
          <li><a href='#'>Ubicación</a></li>
        </ul>
      </div>
    )
}