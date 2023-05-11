import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import QRCode from 'react-qr-code';
import "../assets/styles/Perfil.css"

function StudentProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ver_perfil/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div >
        
      {data.map(student => (
        <div className='perfil' key={student.idPerfil}>
          <div className='datos'>
            <p className='etiqueta'>Usuario: </p>
            <p className='dato'>{student.username}</p>
            <p className='etiqueta'>Correo:</p>
            <p className='dato'>{student.email}</p>
            <p className='etiqueta'>Programa: </p>
            <p className='dato'> Ingenieria de Sistemas</p>
            <p className='etiqueta'>Documento: </p>
            <p className='dato'>{student.documento}</p>
          </div>
          <div className='codigoQR'>
            <p>
              <QRCode value={JSON.stringify(student)} size="210" bigColor="#282c34" />
            </p>
          </div>
          
        </div>
      ))}
      </div>
        <div className='boton'>
          <Link className='botonEditar' to="/editarperfil">
            <button className='custom-btn btn-4'>Editar perfil</button>
          </Link>
        </div>
          
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
        </div>
  );
}

export default StudentProfile;
