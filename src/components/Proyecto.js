import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    //Estado para mostrarlo en el jsx
    const [proyecto, setProyectoState] = useState({});

    //recibimos el parametro que nos viene por url
    const params = useParams();

    //en el useEffect recibimos una función de call back
    useEffect(() => {
        //filtrar solo un proyecto
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        console.log(proyecto);

        setProyectoState(proyecto[0]);

    }, []);//se ejecuta una vez

  return (
    <div className='page page-work'>
        <div className="mask">
            <img src={"/images/"+proyecto.id + ".png"} />
        </div>
    <h1 className='heading'>{ proyecto.nombre }</h1>
    <p>{ proyecto.tecnologias }</p>
    <p>{ proyecto.descripcion }</p>
    <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a>

    </div>
  )
}
