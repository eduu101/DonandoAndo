import "./styles.css";
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./logo.svg";
import { useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();
  const formRef = useRef(null);  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);
    setEmailValid(emailValid);
    setMessageValid(message.length > 5);
    const params = {
      user_email: email,
      message: message,
    };
    if (emailValid && messageValid) {
      emailjs.send("service_o0bzptg","template_s1aabhr",params,"3zz-vSwTmTPb5OnI7")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado');
     }, function(error) {
        alert('Hubo un error, por favor intenta de nuevo más tarde');
        console.log('FAILED...', error);
     });
    } else {
      alert('Por favor verifica los campos');
    }
  };

useEffect(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }, [scrollPosition]);
  

  const handleContactClick = () => {
    // Obtener la posición de la sección de "Contacto" en la página
    const contactSectionPosition = formRef.current.offsetTop;

    // Realizar el scroll suave hacia la sección de "Contacto"
    window.scrollTo({
      top: contactSectionPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav>
        <img src={logo} style={{cursor:'pointer'}}/>
        <a href="#" onClick={handleContactClick}>Contacto</a>
        <a href="/donaciones">Qué Donar</a>
        <a href="/puntos">Donde Donamos</a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2 style={{width:'90%'}}>Bienvenido a Donando Ando</h2>
          <h3 style={{width:'90%'}}>En Donando Ando, creemos en el poder transformador de la generosidad.</h3> 
          <h4 style={{width:'90%'}}>Somos un grupo de personas comprometidas con la idea de que juntos podemos marcar la diferencia en la vida de quienes más lo necesitan.</h4>
          {/* <h4 style={{width:'90%'}}>Nos dedicamos apasionadamente a recolectar donaciones de alimentos, ropa, juguetes y otros artículos esenciales para compartir con diversos grupos en situación de vulnerabilidad.</h4> */}
          {/* <h4 style={{width:'90%'}}>Nuestra misión es simple pero poderosa: construir puentes de solidaridad y brindar apoyo tangible a comunidades marginadas. Colaboramos directamente con grupos de inmigrantes, casas hogar, personas en situación de calle y aquellos que enfrentan dificultades en su día a día. Creemos que cada pequeña contribución suma y que, al unirnos, podemos crear un impacto significativo.</h4> */}
          {/* <h4 style={{width:'90%'}}>En esta plataforma, encontrarás la oportunidad de ser parte de algo más grande que tú mismo. Explora cómo puedes participar, ya sea donando artículos, ofreciendo tu tiempo como voluntario o simplemente compartiendo nuestra misión con tus amigos y familiares. Cada gesto cuenta y cada acto de bondad tiene un efecto positivo en la vida de quienes ayudamos.</h4> */}
          {/* <h4 style={{width:'90%'}}>Juntos, estamos construyendo un mundo más compasivo y solidario. Únete a Donando Ando y descubre la alegría de dar mientras caminamos juntos hacia un futuro más brillante para todos.</h4> */}
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <img src={img1} />
          <h2>Creemos que cada pequeña contribución suma y que, al unirnos, podemos crear un impacto significativo.</h2>
          <p>
          Nos dedicamos apasionadamente a recolectar donaciones de alimentos, ropa, juguetes y otros artículos esenciales para compartir con diversos grupos en situación de vulnerabilidad.
          </p>
        </section>
        <section className="panel red">
          <img src={img2} />
          <h2>Nuestra misión es simple pero poderosa: construir puentes de solidaridad y brindar apoyo tangible a comunidades marginadas.</h2>
          <p>
          Colaboramos directamente con grupos de inmigrantes, casas hogar, personas en situación de calle y aquellos que enfrentan dificultades en su día a día.
          </p>
        </section>
        <section className="description panel blue">
          <img src={img3} />
          <h2>En esta plataforma, encontrarás la oportunidad de ser parte de algo más grande que tú mismo.</h2>
          <p>
          Explora cómo puedes participar, ya sea donando artículos, ofreciendo tu tiempo como voluntario o simplemente compartiendo nuestra misión con tus amigos y familiares. Cada gesto cuenta y cada acto de bondad tiene un efecto positivo en la vida de quienes ayudamos.
          </p>
        </section>
        <section className="panel red">
          <img src={img4} />
          <h2>Juntos, estamos construyendo un mundo más compasivo y solidario.</h2>
          <p>
          Únete a Donando Ando y descubre la alegría de dar mientras caminamos juntos hacia un futuro más brillante para todos.
          </p>
        </section>
      </div>
      <section className="footer" ref={formRef}>
        <h2>¡Contáctanos!</h2>
        <form>
          <input type="text" placeholder="email" value={email} onChange={handleChangeEmail}/>
          <textarea rows={6} placeholder="Mensaje" 
          style={{resize:'none'}}
          value={message}
          onChange={handleChangeMessage}
          />
          <button onClick={handleSend}>ENVIAR</button>
        </form>
      </section>
    </>
  );
};
