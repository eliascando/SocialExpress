import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../css/Router.css'
import { LogIn } from '../components/Login'
import { SingUp } from '../components/SingUp'
import { Home } from '../components/app/Home'

export const Router = () => {
  return (
    <div className='main'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<LogIn />}/>
              <Route path='/login' element={<LogIn />}/>
              <Route path='/signup' element={<SingUp />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='*' element={<h1>404</h1>}/>        
          </Routes>
      </BrowserRouter>
    </div>
  )
}