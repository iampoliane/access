
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

  const searchByName = async (name) => {
    try {
      const response = await api.get(`/searchbyname?name=${name}`);
      setSchedule(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    console.log('Pesquisar por:', searchTerm);
    searchByName(searchTerm);
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
        <Link className="card" key={schedule.id} to={String(schedule.id)}>
          <span>{schedule.name}</span>
          <span>
            {schedule.dateTime} - {schedule.dateTime}
          </span>
        </Link>
      ))}
    </div>
  );
}