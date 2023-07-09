import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../css/Router.css'
import { LogIn } from '../components/Login'
import { SingUp } from '../components/SingUp'
import { Home } from '../components/app/Home'
import { Notifications } from '../components/app/Notifications'
import { Profile } from '../components/app/Profile'
import { Feed } from '../components/app/Feed'
import { Settings } from '../components/app/Settings'

export const Router = () => {

  return (
    <div className='main'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navigate to='/login'/>}/>
              <Route path='/login' element={<LogIn />}/>
              <Route path='/signup' element={<SingUp />}/>
              <Route path='/home' element={<Home />}>
                <Route path='/home' element={<Navigate to='/home/feed'/>}/>
                <Route path='/home/notifications' element={<Notifications />}/>
                <Route path='/home/profile' element={<Profile />}/>
                <Route path='/home/feed' element={<Feed />}/>
                <Route path='/home/settings' element={<Settings />}/>
              </Route>
              <Route path='*' element={<h1>404</h1>}/>        
          </Routes>
      </BrowserRouter>
    </div>
  )
}