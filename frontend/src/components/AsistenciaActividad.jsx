import React, { useState, useEffect } from "react";
import axios from "axios";

const ActividadesList = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/asistenciaactividad/").then((response) => {
      setActividades(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Actividades</h1>
      <ul>
        {actividades.map((actividad) => (
          <li key={actividad.idAsistencia}>
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
