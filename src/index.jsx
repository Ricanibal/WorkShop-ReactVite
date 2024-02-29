import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Header} from './components/Header.jsx'
import {Barra} from './components/BarraLateral.jsx'
import {HeaderFiltro} from './components/Emepelados/HerderFiltro.jsx'
import {Trabajos} from './components/Emepelados/Working.jsx'
import {ErrorPath} from './components/ErrorPath.jsx'
import './style/style.css'

const router = createBrowserRouter([
    {
        path:'/',
        element: [<HeaderFiltro/>,<Trabajos/>],
    },
    {
        path:'/empleos',
        element: [<HeaderFiltro/>,<Trabajos/>],
    },
    {
        path:'/postulaciones',
        element: <ErrorPath name ="Postulaciones"/>
    },
    {
        path:'/codex',
        element: <ErrorPath name ="codex"/>
    },
    {
        path:'/bootcamp',
        element: <ErrorPath name ="bootcamp"/>
    },
    {
        path:'/premios',
        element: <ErrorPath name ="premios"/>
    },
    {
        path:'/cv',
        element: <ErrorPath name ="Tu cv"/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    <Header/>
    <div className='cuerpo'>
        <Barra/>
        <div className='zonatrabajo'>
            <RouterProvider router = {router}/> 
        </div>
        
    </div>
    </>
    
)