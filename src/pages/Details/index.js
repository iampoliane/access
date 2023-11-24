import {TvShow} from "./mock.js"
import "./styles.css"
export function Details(){
    return (
        <div className="container">
            <section class="destaque">
                <h3>Programa: <span>{TvShow.name}</span></h3>
            </section>
            
            <section class="destaque">
                <p><b> <span>Data do programa: {TvShow.date}</span></b></p>
                <p><b>Tipo: <span>{TvShow.type}</span></b></p>
                <p><b>Recorrência: <span>{TvShow.recurrence}</span></b></p>
                
                <p><b>Descrição: <span>{TvShow.description}</span></b></p>
                <br></br>
            </section>
        </div>
)
}