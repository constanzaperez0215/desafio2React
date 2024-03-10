import Formulario from './Formulario'
import SocialButton from './SocialButton'


function Registro() {
  return (
    <div className='card'>
      <h2>Crear una cuenta</h2>
      <div className='contenedorIcon'>
        <SocialButton icon={"fa-brands fa-facebook"} />
        <SocialButton icon={"fa-brands fa-github"} />
        <SocialButton icon={"fa-brands fa-linkedin"} />
      </div>

      <p className='parrafo'>O usa tu email para registrarte</p>
      <Formulario />
    </div>
  )
}

export default Registro