import React, { useState } from 'react';
import "../assets/styles/Queja.css"

const Quejas = () => {
  const [queja, setQueja] = useState('');

  const handleQuejaChange = (event) => {
    setQueja(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí puedes agregar la lógica para enviar la queja al servidor
    console.log(`Queja enviada: ${queja}`);
    setQueja('');
  };

  return (
    <div>
      <h1>Enviar Queja</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="queja" className="form-label">Escriba su queja</label>
          <textarea className="form-control" id="queja" rows="3" value={queja} onChange={handleQuejaChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Quejas;
