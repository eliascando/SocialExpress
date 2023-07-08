import { Router } from './router/Router'
import './App.css'
import { UserContext } from './contexts/UserContext'
import { useEffect, useState } from 'react'
import { SideContentInicio } from './components/layout/SideContentInicio'

function App() {

  const [user, setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem('user')) || {}
  })
  const [token, setToken] = useState(()=>{
    return JSON.parse(localStorage.getItem('token')) || ''
  })
  const [darkMode, setDarkMode] = useState(()=>{
    return JSON.parse(localStorage.getItem('darkMode')) || false
  })

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  useEffect(()=>{
    localStorage.setItem('token', JSON.stringify(token))
  }, [token])

  useEffect(()=>{
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`layout ${user._id? 'display-user-page':''}`}>
      {!user._id?(<SideContentInicio />):null}
        <UserContext.Provider value={{
          user, setUser,
          token, setToken,
          darkMode, setDarkMode
        }}>
          <Router />
        </UserContext.Provider>
    </div>
  )
}

export default App