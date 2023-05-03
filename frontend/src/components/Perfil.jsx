import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import QRCode from 'react-qr-code';

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
      {data.map(student => (
        <div key={student.idPerfil}>
          <p>Usuario: {student.username}</p>
          <p>Correo: {student.email}</p>
          <p>Programa: Ingenieria de Sistemas</p>
          <p>Documento: {student.documento}</p>
          <p>
          <QRCode value={JSON.stringify(student)} size="210" bigColor="#282c34" />
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudentProfile;
