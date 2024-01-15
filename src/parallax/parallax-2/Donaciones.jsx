import React from 'react'
import logo from "./logo.svg";

export const Donaciones = () => {

    const navigateHome = () => {
        window.location.href = '/inicio';
    }

  return (
    <>
    <nav>
      <img src={logo} onClick={navigateHome} style={{cursor:'pointer'}} />
      <a href="#" onClick={navigateHome}> Inicio </a>
      <a href="/puntos">Donde Donamos</a>
    </nav>
    <section className="banner">
      <div className="banner-content">
        <h4 style={{width:'90%'}}>¿Qué puedes donar?</h4> 
        <ul style={{width:'90%'}}>
            <li>
                <a style={{color:'#fff'}}>{"Alimentos no perecederos (agua, enlatados)"}</a>
            </li>
            <li>
                <a style={{color:'#fff'}}>{"Ropa (Apreciamos mucho la ropa para climas fríos)"}</a>
            </li>
            <li>
                <a style={{color:'#fff'}}>Zapatos</a>
            </li>
            <li>
                <a style={{color:'#fff'}}>Juguetes</a>
            </li>
            <li>
                <a style={{color:'#fff'}}>Artículos de higiene personal</a>
            </li>
            <li>
                <a style={{color:'#fff'}}>Cobijas</a>
            </li>
        </ul>
      </div>
    </section>
  </>
  )
}
