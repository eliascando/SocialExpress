import { NavLink } from 'react-router-dom';
import '../css/SingUp.css';

export const SingUp = () => {

  const Registrarse = (e) => {
    e.preventDefault();
    let nombre = e.target[0].value;
    let apellido = e.target[1].value;
    let usuario = e.target[2].value;
    let correo = e.target[3].value;
    let contraseña = e.target[4].value;
    let confirmarContraseña = e.target[5].value;
    if(nombre === '' || apellido === '' || usuario === '' || correo === '' || contraseña === '' || confirmarContraseña === ''){
      alert('Ingrese todos los datos');
      return;
    }
    if(contraseña !== confirmarContraseña){
      alert('Las contraseñas no coinciden');
      return;
    }
    //Simulando una peticion a la base de datos para fines de prueba
    alert('Usuario registrado correctamente');
  }

  return (
    <div className="componente-singup">
      <div className='contenido-singup'>
        <h2>Ingrese sus datos</h2>
        <form className="formulario-singup" onSubmit={(e)=>{Registrarse(e)}}>
            <div className="nombres">
              <input type="text" placeholder='Nombre' className='input-text name'/>
              <input type="text" placeholder='Apellido' className='input-text lastname'/>
            </div>
            <input type="text" placeholder='Usuario' className='input-text username'/>
            <input type="text" placeholder="Correo electrónico" className="input-text email"/>
            <input type="password" placeholder="Contraseña" className="input-text password"/>
            <input type="password" placeholder="Confirmar contraseña" className="input-password password"/>
            <input type="submit" value="Registrarse" className="boton-registrarse"/>
        </form>
        <NavLink className="boton-volver" to="/login">Volver</NavLink>
      </div>
    </div>
  )
}