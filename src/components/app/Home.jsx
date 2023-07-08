import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export const Home = () => {

  const { user, token, darkMode, setDarkMode } = useContext(UserContext);
  const Navigate = useNavigate();

  return (
    <div className="home-usuario">
      <h1>Home</h1>
      <h2>{user.nombre}</h2>
      <h2>{user.correo}</h2>
      <h2>{user.usuario}</h2>
      <h2>{user._id}</h2>
      <h2>{token}</h2>
      <h2>{darkMode? 'Dark Mode':'Light Mode'}</h2>
      <button onClick={()=>{setDarkMode(!darkMode)}}>Cambiar modo</button>

      {/*Borrar todo*/}
      <button onClick={()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('darkMode');
        Navigate('/login');
      }}>Borrar todo</button>
    </div>
  )
}