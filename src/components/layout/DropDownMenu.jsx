/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

export const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    const navigate = useNavigate()

    useEffect(()=>{
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target))
            setOpen(false);
        }
        document.addEventListener('mousedown', handler);
    
        return ()=>{
            document.removeEventListener('mousedown', handler);
        }
    });

  return (
    <div className='menu-container' ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
            <img src='https://i.ibb.co/tzfXmFL/user-default.jpg' alt="profile-picture"/>
        </div>  
        <div className={`dropdown-menu ${open ? 'active':'inactive'}`}>
          <h3>Elias</h3>
          <ul>
            <DropdownItem img={'bi bi-person'} text={'Perfil'} funcion={()=>{navigate('/home/profile')}}/>
            <DropdownItem img={'bi bi-gear-fill'} text={'Ajustes'}funcion={()=>{navigate('/home/settings')}}/>
            <DropdownItem img={'bi bi-box-arrow-right'} text={'Salir'}/>
          </ul>
        </div>
      </div>
  )
}

function DropdownItem(props){
    return(
      <li className="dropdownItem" onClick={props.funcion}>
        <i className={props.img}></i>
        <a>{props.text}</a>
      </li>
    );
  }