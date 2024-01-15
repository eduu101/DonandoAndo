import React from 'react'
import logo from "./logo.svg";

export const Puntos = () => {

    const navigateHome = () => {
        window.location.href = '/inicio';
    }

  return (
    <>
    <nav>
      <img src={logo} onClick={navigateHome} style={{cursor:'pointer'}} />
      <a href="#" onClick={navigateHome}> Inicio </a>
      <a href="/donaciones">Qué Donar</a>
      
    </nav>
    <section className="banner">
      <div className="banner-content">
        <h4 style={{width:'90%'}}>Ubicaciones en las que hemos donado</h4> 
        <ul style={{width:'90%'}}>
            <li>
                <a style={{color:'#fff'}} href="https://maps.app.goo.gl/M5m4cFnvT7g1WGzX8">Grupo de inmigrantes central de autobuses del norte</a>
            </li>
            </ul>
        <h4 style={{width:'90%'}}>Próximamente</h4>
        <ul style={{width:'90%'}}>
            <li>
                <a style={{color:'#fff'}} href="https://maps.app.goo.gl/HoKZR6GsK4gbqW4m6">Casa Hogar de Nuestra Señora de la Paz A.C.</a>
            </li>
        </ul>
      </div>
    </section>
  </>
  )
}
