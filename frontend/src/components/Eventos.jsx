import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "../assets/styles/Eventos.css"

function EventoList() {
  const [eventos, setEventos] = useState([]);
  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/eventos/')
      .then(response => response.json())
      .then(data => setEventos(data));
  }, []);


  return (
    <div className='main'>
        <Navbar/>
        <h1>Eventos</h1>
      <div className='eventos container' key={eventos.idEvento}>
      {eventos.map(evento => (
          <div className='evento' key={evento.idEvento}>
            <div className=''>
              <p className=''>Evento: {evento.nombre_evento}</p>
              <p className=''>Administrativo: {evento.Administrativo.nombre} {evento.Administrativo.apellido}</p>
              <p className=''>Fecha inicio: {evento.fecha_inicio}</p>
              <p className=''>Fecha final: {evento.fecha_final}</p>
            </div>
          </div>
        ))}
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    </div>
    
  );
}

export default EventoList;
