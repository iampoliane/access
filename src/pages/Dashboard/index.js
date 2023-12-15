import {schedules} from "./mock.js"
import "./styles.css"
import { Link } from "react-router-dom";
export function Dashboard() {

    return (
        <div className="container">
            {schedules.map((schedule)=> (
                <Link className="card" key={schedule.id} to={schedule.id}>
                    <span>{schedule.name}</span>
                    <span>{schedule.time.start} - {schedule.time.end}</span>
                </Link>
            ))}
            <a href="/Form" class="button-link">Adicionar Programa de TV</a>
            
        </div>
    )
}