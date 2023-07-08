import { NavLink, useNavigate } from "react-router-dom"
import '../../css/NavBar.css'
import { DropDownMenu } from "./DropDownMenu"

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <NavLink to="/home" className="social-express" onClick={()=>{window.scrollTo({top:0, behavior:'smooth'});}}>SocialExpress</NavLink>
      <input type="text" placeholder="Buscar" className="input-buscar"/>
      <button onClick={()=>{navigate('/home/notifications')}} className="boton-notificaciones"><i className="bi bi-bell-fill"></i></button>
      <DropDownMenu/>    
    </div>
  )
}