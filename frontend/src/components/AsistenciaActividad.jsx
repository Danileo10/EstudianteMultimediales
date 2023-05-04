import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Quejas from "./Quejas";
import "../assets/styles/AsistenciaActividad.css"

const ActividadesList = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/asistenciaactividad/").then((response) => {
      setActividades(response.data);
    });
  }, []);

  const sumarHorasRegistradas = () => {
    const horasRegistradas = actividades.reduce((totalHoras, actividad) => {
      return totalHoras + actividad.horas_registradas;
    }, 0);
    return horasRegistradas;
  }

  return (

    <div className="body">
      <Navbar />
      <h1 className="titulo">Horas registradas</h1>
      <div className="container">
        
        <ul className="lista-actividad container">
          {actividades.map((actividad) => (
            <li className="actividad" key={actividad.idAsistencia}>
              <p>Actividad: {actividad.actividad.nombre}</p>
              <p>Horas registradas: {actividad.horas_registradas}</p>
              <p>Fecha: {actividad.fecha}</p>
            </li>
          ))}
        </ul>
        <p>Total horas registradas: {sumarHorasRegistradas()}</p>
        <Quejas/>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

    </div>
  );
};

export default ActividadesList;
