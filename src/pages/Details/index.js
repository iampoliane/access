import "./styles.css"
import React from 'react';
import api from '../../services/api';


export function Details(){
        const [TvShow, setTvShow] = React.useState(null);
      
        React.useEffect(() => {
          api.get(api.baseUrl).then((response) => {
            setTvShow(response.data);
          });
        }, []);
      
        if (!TvShow) return null;

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