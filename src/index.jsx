import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {Header} from './components/Header.jsx'
import {Barra} from './components/BarraLateral.jsx'
import {HeaderFiltro} from './components/Emepelados/HerderFiltro.jsx'
import {Trabajos} from './components/Emepelados/Working.jsx'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header/>
    <div className='cuerpo'>
        <Barra/>
        <div className='zonatrabajo'>
            <HeaderFiltro/>
            <Trabajos/>  
        </div>
        
    </div>
    </>
    
)