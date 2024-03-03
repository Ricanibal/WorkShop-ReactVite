import React, { useEffect, useRef, useState } from 'react';
import '../../style/HeaderStyle.css';


export function HeaderFiltro() {

  const [areaMenuOpen, setAreaMenuOpen] = useState(false);
  const [cargoMenuOpen, setCargoMenuOpen] = useState(false);
  const [salarioMenuOpen, setSalarioMenuOpen] = useState(false);
  const [ubicacionMenuOpen, setUbicacionMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    // Aquí puedes realizar alguna acción cuando se envíe el formulario de búsqueda
    event.preventDefault();
    console.log('Búsqueda realizada:', searchQuery);
  };

    return(
      <div className='HeaderWork'>
        <ul className='nav'>

        <li>
          <form onSubmit={handleSearchSubmit}>
            <div className="search-bar">
            <button type="submit" className="search-button"><i className="fa fa-search"></i></button>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Busca por cargo, salario, ubicacion o empresa"
                className="search-input"
              />
              
            </div>
          </form>
        </li>

          <li ref={areaRef}>
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

          <li ref={cargoRef}>
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
          
          <li ref={salarioRef}>
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
          
          <li ref={ubicacionRef}>
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