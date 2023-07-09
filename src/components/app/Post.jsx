/* eslint-disable react/prop-types */
import '../../css/Post.css'
import { ImageUploader } from './ImageUploader'

export const Post = ({setPost}) => {
  return (
    <div className="post">
        <div className='post-container'>
            <div className='post-header'>
                <h2 className='titulo-post'>Crear publicación</h2>
                <button onClick={()=>{setPost(false)}} className='boton-cerrar-post'><i className="bi bi-x-circle-fill"></i></button> 
            </div>
            <div className='post-form'>
                <textarea placeholder='¿Qué estás pensando?' className='texto-post'/>
                <div className='imagen'>
                 <ImageUploader />
                </div>
                <input type='submit' value='Publicar' className='boton-publicar-post'/>
            </div>   
        </div>
    </div>
  )
}