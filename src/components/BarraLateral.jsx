import '../style/BarraLateralStyle.css'
import consola from '../static/icon/consola.png'
import curriculum from '../static/icon/curriculum.png' 
import empleo from '../static/icon/empleo.png'
import postulacion from '../static/icon/postulacion.png'
import cohorchetes from '../static/icon/soportes.png'
import diamante from '../static/icon/diamante.png'
export function Barra()
{
    let Piezas = [ 
                    {nombre:'Empleos', icono:empleo, mensaje:'imgEmpleos'},
                    {nombre:'Postulaciones', icono:postulacion, mensaje:'imgPostulacion'},
                    {nombre:'CodeX', icono:consola, mensaje:'imgRetos'},
                    {nombre:'Bootcamp', icono:cohorchetes, mensaje:'imgBootcamp'},
                    {nombre:'Premios', icono:diamante, mensaje:'imgPremios'},
                    {nombre:'Tu cv', icono:curriculum, mensaje:'imgCV'},
                ]
    return(
        <div className='barralaterla'>
            {Piezas.map((user) =>{
              return (
                <a className='pieza'>
                    <img className='imagenbarra' src={user.icono} alt={user.mensaje}/>
                    <p className='parrafobarra'>{user.nombre}</p>
                </a>
              )
            })}
        </div>
    )
}

