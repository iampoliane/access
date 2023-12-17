import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import "./styles.css";

export function Form() {
  const [name, setName] = useState("");
  const [programDate, setProgramDate] = useState("");
  const [type, setType] = useState("");
  const [recurrence, setRecurrence] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = async () => {
    try {
      const response = await api.post('/register', {
        name: name,
        dateTime: programDate,
        type: type,
        recurrence: recurrence,
        description: description
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", name);
    console.log("Data e horário do Programa:", programDate);
    console.log("Tipo:", type);
    console.log("Recorrência:", recurrence);
    console.log("Descrição:", description);

    submitForm();
  };

  return (
    <div>
      <div className="form-container">
        <h2>Adicionar Detalhes</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
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