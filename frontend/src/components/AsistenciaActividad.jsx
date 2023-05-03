import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ActividadesList = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/asistenciaactividad/").then((response) => {
      setActividades(response.data);
    });
  }, []);

  return (
    
    <div>
    <Navbar/>
      <h1>Horas registradas</h1>
      <ul className="lista actividad">
        {actividades.map((actividad) => (
          <li className="actividad" key={actividad.idAsistencia}>
            <p>Actividad: {actividad.actividad.nombre}</p>
            <p>Horas registradas: {actividad.horas_registradas}</p>
            <p>Fecha: {actividad.fecha}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActividadesList;
