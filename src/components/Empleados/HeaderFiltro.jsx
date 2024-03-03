import React, { useEffect, useRef, useState } from 'react';
import '../../style/HeaderStyle.css';


export function HeaderFiltro() {

  const [areaMenuOpen, setAreaMenuOpen] = useState(false);
  const [cargoMenuOpen, setCargoMenuOpen] = useState(false);
  const [salarioMenuOpen, setSalarioMenuOpen] = useState(false);
  const [ubicacionMenuOpen, setUbicacionMenuOpen] = useState(false);

  const areaRef = useRef(null);
  const cargoRef = useRef(null);
  const salarioRef = useRef(null);
  const ubicacionRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        areaRef.current &&
        !areaRef.current.contains(event.target) &&
        cargoRef.current &&
        !cargoRef.current.contains(event.target) &&
        salarioRef.current &&
        !salarioRef.current.contains(event.target) &&
        ubicacionRef.current &&
        !ubicacionRef.current.contains(event.target)
      ) {
        setAreaMenuOpen(false);
        setCargoMenuOpen(false);
        setSalarioMenuOpen(false);
        setUbicacionMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleAreaMenu = () => {
    setAreaMenuOpen(!areaMenuOpen);
    setCargoMenuOpen(false);
    setSalarioMenuOpen(false);
    setUbicacionMenuOpen(false);
  };

  const toggleCargoMenu = () => {
    setCargoMenuOpen(!cargoMenuOpen);
    setAreaMenuOpen(false);
    setSalarioMenuOpen(false);
    setUbicacionMenuOpen(false);
  };

  const toggleSalarioMenu = () => {
    setSalarioMenuOpen(!salarioMenuOpen);
    setAreaMenuOpen(false);
    setCargoMenuOpen(false);
    setUbicacionMenuOpen(false);
  };

  const toggleUbicacionMenu = () => {
    setUbicacionMenuOpen(!ubicacionMenuOpen);
    setAreaMenuOpen(false);
    setCargoMenuOpen(false);
    setSalarioMenuOpen(false);
  };

    return(
      <div className='HeaderWork'>
        <ul className='navbar'>
        <li className='liHeaderFiltro'>
            <div class="search-container">
              <div class="wrap">
                <div class="search">
                  <button type="submit" class="searchButton">
                      <i class="fa fa-search lupa"></i>
                  </button>
                  <input type="text" class="searchTerm" placeholder="Busca por cargo, salario, ubicación o empresa"/>
                </div>
              </div>
            </div>
          </li>

          <li className='liHeaderFiltro' ref={areaRef}>
            <button className='nav-button' onClick={toggleAreaMenu}>
              Área
              <i className='fa fa-caret-down'></i>
            </button>
            {areaMenuOpen && (
              <ul className='dropdown-menu'>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            )}
          </li>

          <li className='liHeaderFiltro' ref={cargoRef}>
            <button className='nav-button' onClick={toggleCargoMenu}>
              Cargo
              <i className='fa fa-caret-down'></i>
            </button>
            {cargoMenuOpen && (
              <ul className='dropdown-menu'>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            )}
          </li>
          
          <li className='liHeaderFiltro' ref={salarioRef}>
            <button className='nav-button' onClick={toggleSalarioMenu}>
              Salario
              <i className='fa fa-caret-down'></i>
            </button>
            {salarioMenuOpen && (
              <ul className='dropdown-menu'>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            )}
          </li>
          
          <li className='liHeaderFiltro' ref={ubicacionRef}>
            <button className='nav-button' onClick={toggleUbicacionMenu}>
              Ubicación
              <i className='fa fa-caret-down'></i>
            </button>
            {ubicacionMenuOpen && (
              <ul className='dropdown-menu'>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    )
}