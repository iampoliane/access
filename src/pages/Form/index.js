import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Form() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [programDate, setProgramDate] = useState("");
  const [type, setType] = useState("");
  const [recurrence, setRecurrence] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", name);
    console.log("Horário Inicial:", startTime);
    console.log("Horário Final:", endTime);
    console.log("Data do Programa:", programDate);
    console.log("Tipo:", type);
    console.log("Recorrência:", recurrence);
    console.log("Descrição:", description);
  };

  return (
    <div>
      <div className="form-container">
        <h2>Adicionar Horário</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Horário Inicial:
            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
          <label>
            Horário Final:
            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </form>
      </div>

      <div className="form-container">
        <h2>Adicionar Detalhes</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Data do Programa:
            <input
              type="text"
              value={programDate}
              onChange={(e) => setProgramDate(e.target.value)}
            />
          </label>
          <label>
            Tipo:
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            Recorrência:
            <input
              type="text"
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          {/* Botão para enviar ambos os formulários */}
          <button type="submit" className="button-link">
            Enviar
          </button>
        </form>
      </div>

      <Link to="/" className="button-link">
        Voltar para Tela Inicial
      </Link>
    </div>
  );
}
