import consola from '../static/icon/consola.png'
import curriculum from '../static/icon/curriculum.png'
import diamante from '../static/icon/diamante.png'
import empleo from '../static/icon/empleo.png'
import postulacion from '../static/icon/postulacion.png'
import cohorchetes from '../static/icon/soportes.png'
import '../style/BarraLateralStyle.css'
export function Barra()
{
    let Piezas = [
                    {nombre:'Empleos', icono:empleo, mensaje:'imgEmpleos',direccion:"/empleos"},
                    {nombre:'Postulaciones', icono:postulacion, mensaje:'imgPostulacion',direccion:"/postulaciones"},
                    {nombre:'CodeX', icono:consola, mensaje:'imgRetos',direccion:"/codex"},
                    {nombre:'Bootcamp', icono:cohorchetes, mensaje:'imgBootcamp',direccion:"/bootcamp"},
                    {nombre:'Premios', icono:diamante, mensaje:'imgPremios',direccion:"/premios"},
                    {nombre:'Tu cv', icono:curriculum, mensaje:'imgCV',direccion:"/cv"},
                ]
    return(
        <div className='barralaterla'>
            {Piezas.map((user) =>{
              return (
                <a className='pieza' href={user.direccion}>
                    <img className='imagenbarra' src={user.icono} alt={user.mensaje}/>
                    <p className='parrafobarra'>{user.nombre}</p>
                </a>
              )
            })}
        </div>
    )
}

