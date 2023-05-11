import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function StudentProfile() {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ver_perfil/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      username: event.target.username.value,
      email: event.target.email.value,
      documento: event.target.documento.value
    };
    axios.put('http://127.0.0.1:8000/api/ver_perfil/', updatedData)
      .then(response => {
        console.log(response);
        history.push('/perfil');
        // Actualizar la información en la vista
        // Por ejemplo, podrías volver a hacer una petición GET para obtener la información actualizada
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      {data.map(student => (
        <div className='perfil' key={student.idPerfil}>
          <form onSubmit={handleSubmit}>
            <div className='datos'>
              <p className='etiqueta'>Usuario: </p>
              <input type='text' name='username' defaultValue={student.username} />
              <p className='etiqueta'>Correo:</p>
              <input type='text' name='email' defaultValue={student.email} />
              <p className='etiqueta'>Programa: </p>
              <p className='dato'> Ingenieria de Sistemas</p>
              <p className='etiqueta'>Documento: </p>
              <input type='text' name='documento' defaultValue={student.documento} />
            </div>
            <button type='submit'>Guardar cambios</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default StudentProfile;
