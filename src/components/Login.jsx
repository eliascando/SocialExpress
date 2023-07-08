/* eslint-disable no-unused-vars */
import { NavLink, Navigate } from "react-router-dom"
import '../css/Login.css'
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export const LogIn = () => {

  const {setUser, setToken, setDarkMode} = useContext(UserContext);
  const Navigate = useNavigate();

  const login = (e) => {
    console.log(e.target);
    e.preventDefault();
    let correo = e.target[0].value;
    let contraseña = e.target[1].value;
    if(correo === '' || contraseña === ''){
      alert('Ingrese todos los datos');
      return;
    }
    //Simulando una peticion a la base de datos para fines de prueba
    if(correo === 'usuario@correo.com' && contraseña === '123456'){
      setUser({
        _id: '123456789',
        nombre: 'Juan',
        apellido: 'Perez',
        usuario: 'usuario123',
        correo: correo,
        contraseña: contraseña,
      })
      let token = Math.random().toString(36).substr(2);
      setToken(token);
      setDarkMode(true);
      Navigate('/home');
    }else{
      alert('Correo o contraseña incorrectos');
    }
  }

  return (
    <div className="componente-login">
        <h1>Bienvenido</h1>
        <form className="formulario-login" onSubmit={(e)=>{login(e)}}>
            <input type="text" placeholder="Correo electrónico" className="input-correo-login"/>
            <input type="password" placeholder="Contraseña" className="input-password-login"/>
            <input type="submit" value="Iniciar Sesion" className="boton-login"/>
        </form>
        <div className="registro">
          <h3>¿No tienes una cuenta?</h3>
          <NavLink className="boton-registrate" to="/signup">
            Registrate
          </NavLink>
        </div>
    </div>
  )
}