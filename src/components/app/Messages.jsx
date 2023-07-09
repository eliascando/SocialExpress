/* eslint-disable react/prop-types */
import '../../css/Messages.css'
import { useRef, useEffect, useState } from 'react';
import {chat} from './chat';
import { ChatWith } from './ChatWith';

export const Messages = ({messages, setMessages}) => {

  const messagesRef = useRef();
  const [chatWith, setChatWith] = useState(false);
  const [person, setPerson] = useState({});

  useEffect(()=>{
    let handler = (e)=>{
      if(!messagesRef.current.contains(e.target))
        setMessages(false);
    }
    document.addEventListener('mousedown', handler);

    return ()=>{
        document.removeEventListener('mousedown', handler);
    }
});


  return (
    <div className='messages' ref={messagesRef}>
      <div className={`messages-content ${!messages?'inactive':'active'}`}>
        <h1>Chat</h1>
        {chatWith
            ? <ChatWith setChatWith={setChatWith} person={person}/>
            : <ul className='messages-list'>
                {
                  chat.map((message, index)=>{
                    return(
                      <li className='message' key={index} onClick={()=>{setChatWith(true); setPerson(message)}}>
                        <div className='message-img'>
                          <img src='https://i.ibb.co/tzfXmFL/user-default.jpg' alt='img'/>
                        </div>
                        <div className='message-info'>
                          <div className='name-message'>
                            <h3>{message.name}</h3>
                          </div>
                          <div className='last-message'>
                            <p>{message.message}</p>
                            <span>{message.time}</span>
                          </div>
                        </div>
                      </li>)
                  })
                }
              </ul>
        }
      </div>
      <div className='boton-messages-div fixed-boton-messages'>
          <button className='boton-messages' onClick={()=>{setMessages(!messages)}}><i className="bi bi-chat-right-text-fill"></i></button>
      </div>
    </div>
  )
}