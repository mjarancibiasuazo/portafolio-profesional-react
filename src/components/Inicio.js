import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola soy <strong>María José Arancibia</strong>, soy desarrollador Web en
        Santiago de Chile y ofrezco mis servicios de <strong>programación y desarrollo</strong> en todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet.<br/>
        <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className="heading">Algunos de Mis Proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
      
      <ListadoTrabajos limite="2"/>
      </section>

  

    </div>
  )
}
