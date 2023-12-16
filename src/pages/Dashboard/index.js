// import { schedules } from "./mock.js";
import React, {useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import api from '../../services/api';

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [schedule, setSchedule] = useState([]);

  const filteredSchedule = schedule.filter(schedule =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = () => {
    console.log('Pesquisar por:', searchTerm);
  };

  const getSchedule = React.useCallback(async () => {
    try {
      const response = await api.get('/list');

      setSchedule(response.data);
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  if (!schedule) {
    return null;
  }

  // const params = useParams();//might not be needy

  return (
    <div className="container">
      <a href="/Form" className="button-link">
        Adicionar Programa de TV
      </a>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="button">
          Pesquisar
        </button>
      </div>
      {filteredSchedule.map(schedule => (
        <Link className="card" key={schedule.id} to={schedule.id}>
          <span>{schedule.name}</span>
          <span>
            {schedule.dateTime} - {schedule.dateTime}
          </span>
        </Link>
      ))}
    </div>
  );
}