import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import '../../css/Home.css'
import { NavBar } from "../layout/NavBar"
import { Footer } from "../layout/Footer"
import { Outlet } from "react-router-dom"

export const Home = () => {

  const { user, token, darkMode, setDarkMode } = useContext(UserContext);

  return (
    <div className="home-usuario">
      <NavBar/>
      <div className="contenido-home">
        <Outlet />
      </div>  
      <Footer />
    </div>
  )
}