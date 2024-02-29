import '../style/ErrorPathStyle.css'
export const ErrorPath = (props) =>
{
    console.log(props)
    return(
        <div className='error'>
        <h1 className='errorTexto'> Proximante tendremos <br/> activo este modulo <br/> {props.name}</h1>
        </div>
    )
}