/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import { uploadImage } from "../services/Settings";
import '../../css/ImageUpload.css'

const ImageUploader = ({imagen}) => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    if (imagen !== "") {
      setImageSrc(imagen);
    }
  }, [imagen]);
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    //uploadImage({id,file,setImageSrc, setSesionActiva});
    showImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //uploadImage({id,file,setImageSrc, setSesionActiva});
    showImage(file);
  };


  const showImage = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="ImageUpload">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="areaImagen"
      >
        {imageSrc && <img src={imageSrc} alt="Imagen" className="imagen" />}
        {!imageSrc && (
          <label htmlFor="file-input" className="label">
            Arrastre o haga clic para añadir una imagen
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="file-input"
          className="botonSubir"
        />
      </div>
    </div>
  );
};

export { ImageUploader };