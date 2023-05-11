import React, { useState, useEffect } from 'react';
import "../assets/styles/EventosxPrograma.css"
import Navbar from "./Navbar";

function Eventos() {

  const [programas, setProgramas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [selectedPrograma, setSelectedPrograma] = useState("");

  useEffect(() => {
    fetch('http://localhost:8000/api/programaevento/')
      .then(response => response.json())
      .then(data => {
        setEventos(data);
        let programasArr = [];
        data.map((evento) => {
          let programa = evento.programa.nombre_programa;
          if (!programasArr.includes(programa)) {
            programasArr.push(programa);
          }
        });
        setProgramas(programasArr);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPrograma(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='titulo'>Eventos por programa</h1>
        <select className='select' value={selectedPrograma} onChange={handleSelectChange}>
          <option value="">Seleccione un programa</option>
          {programas.map((programa) => (
            <option key={programa} value={programa}>{programa}</option>
          ))}
        </select>
        <table className='tabla'>
          <thead className='titulos'>
            <tr>
              <th>Nombre de Evento</th>
              <th>Descripción</th>
              <th>Fecha de Inicio</th>
              <th>Fecha Final</th>
             
            </tr>
          </thead>
          <tbody className='datos'>
            {eventos.filter((evento) => evento.programa.nombre_programa === selectedPrograma).map((evento) => (
              <tr key={evento.id}>
                <td>{evento.evento.nombre_evento}</td>
                <td>{evento.evento.descripcion}</td>
                <td>{evento.evento.fecha_inicio}</td>
                <td>{evento.evento.fecha_final}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
)};

export default Eventos;
