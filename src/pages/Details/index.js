import "./styles.css"
import React from 'react';
import api from '../../services/api';
import { useParams } from "react-router-dom";


export function Details(){
      const params = useParams();

        const [TvShow, setTvShow] = React.useState(null);

        const getTvShowById = React.useCallback(async () => {
          try {
            const response = await api.get(`/details/${params.id}`)

          setTvShow(response.data)
          } catch (error) {
            
          }
        }, [params.id])
      
        React.useEffect(() => {
          getTvShowById()
        }, [getTvShowById]);
      
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
            <a href="/" class="button-link">Voltar para Tela Inicial</a>
        </div>
)
}