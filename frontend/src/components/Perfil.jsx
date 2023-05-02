import { useEffect, useState } from 'react';
import axios from 'axios';

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
      {data.map(student => (
        <div key={student.idPerfil}>
          <p>Usuario: {student.username}</p>
          <p>Correo: {student.email}</p>
          <p>Programa: Ingenieria de Sistemas</p>
          <p>Documento: {student.documento}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentProfile;
