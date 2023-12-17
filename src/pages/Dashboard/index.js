import { schedules } from "./mock.js";
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchedules = schedules.filter((schedule) =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Pesquisar por:", searchTerm);
  };

  return (
      <div className="container">
            <a href="/Form" class="button-link">Adicionar Programa de TV</a>      
            <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} class="button">Pesquisar</button>
      </div>
        {filteredSchedules.map((schedule) => (
          <Link className="card" key={schedule.id} to={schedule.id}>
            <span>{schedule.name}</span>
            <span>{schedule.time.start} - {schedule.time.end}
            </span>
          </Link>
        ))}
      </div>
  );
}