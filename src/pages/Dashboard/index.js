import React, { useState } from "react";
import { Link } from "react-router-dom";
import { schedules } from "./mock.js";
import "./styles.css";

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isAdmin, setIsAdmin] = useState(true); 

  const filteredSchedules = schedules.filter((schedule) =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Pesquisar por:", searchTerm);
  };

  return (
    <div className="container">
      {!isAuthenticated && (
        <Link to="/Login" className="button">
          Login
        </Link>
      )}
      {isAdmin && isAuthenticated && (
        <Link to="/Form" className="button-link">
          Adicionar Programa de TV
        </Link>
      )}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="button">
          Pesquisar
        </button>
      </div>

      {filteredSchedules.map((schedule) => (
        <Link className="card" key={schedule.id} to={schedule.id}>
          <span>{schedule.name}</span>
          <span>
            {schedule.time.start} - {schedule.time.end}
          </span>
        </Link>
      ))}
    </div>
  );
}
