import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";

function EventoList() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/eventos/')
      .then(response => response.json())
      .then(data => setEventos(data));
  }, []);

  return (
    <div>
        <Navbar/>
    <table>
      <thead>
        <tr>
          <th>Nombre del evento</th>
          <th>Administrativo</th>
          <th>Fecha de inicio</th>
          <th>Fecha de finalización</th>
          <th>Estado</th>
          <th>Corrección</th>
        </tr>
      </thead>
      <tbody>
        {eventos.map(evento => (
          <tr key={evento.idEvento}>
            <td>{evento.nombre_evento}</td>
            <td>{evento.Administrativo.nombre} {evento.Administrativo.apellido}</td>
            <td>{evento.fecha_inicio}</td>
            <td>{evento.fecha_final}</td>
            <td>{evento.estado}</td>
            <td>{evento.correcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
}

export default EventoList;
