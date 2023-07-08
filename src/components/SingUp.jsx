import { NavLink } from 'react-router-dom';
import '../css/SingUp.css';

export const SingUp = () => {
  return (
    <div className="componente-singup">
        <h1>Registrate</h1>
        <h3>Ingrese sus datos</h3>
        <form className="formulario-singup">
            <div className="nombres">
              <input type="text" placeholder='Nombre' className='input-text name'/>
              <input type="text" placeholder='Apellido' className='input-text lastname'/>
            </div>
            <input type="text" placeholder='Usuario' className='input-text username'/>
            <input type="text" placeholder="Correo electrónico" className="input-text email"/>
            <div className="password-div">
              <input type="password" placeholder="Contraseña" className="input-text password"/>
              <button className="show-password"><i className="bi bi-eye-slash-fill"></i></button>
            </div>
            <div className='password-div'>
              <input type="password" placeholder="Confirmar contraseña" className="input-password password"/>
              <button className="show-password"><i className="bi bi-eye-slash-fill"></i></button>
            </div>
        </form>
        <button className="boton-registrarse">
          Registrarse
        </button>
        <NavLink className="boton-volver" to="/login">Volver</NavLink>
    </div>
  )
}