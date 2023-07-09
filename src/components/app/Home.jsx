import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import '../../css/Home.css'
import { NavBar } from "../layout/NavBar"
import { Outlet } from "react-router-dom"
import { Post } from "./Post"
import { Messages } from "./Messages"

export const Home = () => {

  const { user, token, darkMode, setDarkMode } = useContext(UserContext);
  const [post, setPost] = useState(false);
  const [messages, setMessages] = useState(false);

  return (
    <div className="home-usuario">
      <NavBar setPost={setPost}/>
      {post && <Post setPost={setPost}/>}
      <div className="contenido-home">
        <Outlet />
      </div>  
      {!post&&(<Messages messages={messages} setMessages={setMessages} />)}
    </div>
  )
}