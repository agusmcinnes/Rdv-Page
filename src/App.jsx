import React, { useEffect, useRef } from 'react';
import './style.css';
import Carrousel from './Carrousel';
import rdvLogo from "./IMAGENES/RDV-.png";
import estatua from "./IMAGENES/estatua_rdv.webp";
import piedras from "./IMAGENES/piedras.png";
import delantal from "./IMAGENES/delantal.webp"
import buzo from "./IMAGENES/buzoRDV.webp"
import gorra from "./IMAGENES/gorraRdv.webp"
import mail from './IMAGENES/Mail.svg'
import instagram from './IMAGENES/instagram.svg'
import whatsapp from './IMAGENES/whatsapp.svg'
import delantal1 from './IMAGENES/delantal1.webp'
import delantal2 from './IMAGENES/delantal2.webp'
import delantal3 from './IMAGENES/delantal3.webp'
import delantal4 from './IMAGENES/delantal4.webp'
import delantal5 from './IMAGENES/delantal5.webp'
import delantal6 from './IMAGENES/delantal6.webp'

import superior1 from './IMAGENES/superior1.webp'

import superior2 from './IMAGENES/superior2.webp'
import superior3 from './IMAGENES/superior3.webp'
import superior4 from './IMAGENES/superior4.webp'
import superior5 from './IMAGENES/superior5.webp'
import superior6 from './IMAGENES/superior6.webp'


function App() {
  const conosContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    });

    const observerGaleria = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
      })
    })
    const seccionesOcultas = document.querySelectorAll('.hidden');
    seccionesOcultas.forEach((seccion)=>observerGaleria.observe(seccion))


    const observerTitlesDerecha = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animacionDerecha');
        }
      });
    });
    
    const imgGrandesDerecha = document.querySelectorAll('.aparecerDerecha');
    imgGrandesDerecha.forEach((seccion) => observerTitlesDerecha.observe(seccion));
    
    const observerTitlesIzquierda = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animacionIzquierda');
        }
      });
    });
    
    const imgGrandesIzquierda = document.querySelectorAll('.aparecerIzquierda');
    imgGrandesIzquierda.forEach((seccion) => observerTitlesIzquierda.observe(seccion));
    
// Selecciona el header y las secciones a observar
const header = document.querySelector('.header');
const firstPage = document.querySelector('.first__page'); // La primera sección (para quitar la clase)
const cajasSection = document.querySelector('.cajas'); // La sección "cajas"

// Observer para la sección "cajas"
const observerCajas = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('small-header'); // Agrega la clase cuando la sección "cajas" sea visible
    }
  });
}, {
  threshold: 0.7 // Cuando la mitad de la sección "cajas" esté visible
});

// Observer para la primera página
const observerFirstPage = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove('small-header'); // Quita la clase cuando se vuelve a la primera sección
    }
  });
}, {
  threshold: 0.9 // Cuando la mitad de la "first__page" sea visible
});

// Inicia la observación de ambas secciones
observerCajas.observe(cajasSection);
observerFirstPage.observe(firstPage);


    if (conosContainerRef.current) {
      observer.observe(conosContainerRef.current);
    }

    return () => {
      if (conosContainerRef.current) {
        observer.unobserve(conosContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
              <header className='header'>
            <nav className='nav'>
              <ul className="nav__list">
                <li className="nav__item"><a href="#conocenos">Conócenos</a></li>
                <li className="nav__item"><a href="#clientes">Clientes</a></li>
                <li className="nav__item"><a href="#delantales">Delantales</a></li>
                <li className="nav__item"><a href="#buzos">Superior</a></li>
                <li className="nav__item"><a href="#otros">Accesorios</a></li>
                <li className="nav__item"><a href="#contacto">Contactame</a></li>
              </ul>
              <span className='span'> </span>
            </nav>
        </header>
      <div className='first__page'>
        <img src={rdvLogo} alt="logo rdv" className='logo'/>
        <h1>Uniformes diseñados</h1>
      </div>

      <div className='cajas'>
        <div className="caja"><span className='caja__text'>+20 Años de experiencia</span></div>
        <div className="caja"><span className='caja__text'>Alta calidad de confección</span></div>
        <div className="caja"><span className='caja__text'>Diseños exclusivos de prendas</span></div>
      </div>
      <div className='piedras'>
          <img src={piedras} alt="" />
      </div>


      <section className='conocenos' id='conocenos'>
        <div className='conocenos__container' ref={conosContainerRef}>
          <h2 className='conocenos__title'>Conócenos</h2>
          <p className='conocenos__text'>En RDV creemos que la marca es el capital más importante de una empresa. Por ende, nuestros uniformes son diseñados teniendo en cuenta no solo la funcionalidad y practicidad de las prendas, sino también los valores que su marca desea transmitir.</p>
          <h3 className='conocenos__slogan'>Diferénciese con uniformes diseñados exclusivamente para su marca</h3>
        </div>
        <img src={estatua} alt="" className='estatua'/>
      </section>
      <section className='clientes' id='clientes'>
        <h3 className='clientes__title aparecerDerecha'>Clientes</h3>
        <p className='clientes__text'>Somos la elección predilecta de las marcas líderes en Mar del Plata y la región. <br/><br />Nuestra reputación se construye superando constantemente las expectativas más exigentes, ofreciendo excelencia en cada detalle</p>
        <Carrousel></Carrousel>
      </section>
      <section className='delantales' id='delantales'>
          <h2 className='delantales__title aparecerIzquierda'>Delantales</h2>
          <div className='galeria'>
              <div className="galeria__img hidden">
                <img src={delantal4} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={delantal1} alt="" />
              </div>
              <div className="galeria__img hidden">
              <img src={delantal3} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={delantal2} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={delantal5} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={delantal6} alt="" />
              </div>
          </div>
          <img src={delantal} alt="" className='delantal__grande aparecerDerecha'/>

      </section>
      <section className='buzos' id='buzos'>
          <h2 className='buzos__title aparecerDerecha'>Superior</h2>
          <div className='galeria'>
              <div className="galeria__img hidden">
                <img src={superior4} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={superior2} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={superior1} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={superior6} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={superior5} alt="" />
              </div>
              <div className="galeria__img hidden">
                <img src={superior3} alt="" />
              </div>
              </div>
          <img src={buzo} alt="" className='buzo__grande aparecerIzquierda'/>
      </section>
      <section className='otros' id='otros'>
          <h2 className='otros__title aparecerIzquierda'>Accesorios</h2>
          <div className='galeria'>
              <div className="galeria__img hidden">1</div>
              <div className="galeria__img hidden">2</div>
              <div className="galeria__img hidden">3</div>
              <div className="galeria__img hidden">4</div>
              <div className="galeria__img hidden">5</div>
              <div className="galeria__img hidden">6</div>
          </div>
          <img src={gorra} alt="" className='remera__grande aparecerDerecha'/>
      </section>
      <footer className='footer' id='contacto'>
        <div className='footer__wrapper'>
          <div className='contacto__logo'>
            <img src={rdvLogo} alt="" className='rdv__small-logo'/>
          </div>
          <div className='contacto'>
              <span className='contacto__title'>Contactanos</span>
              <div className='contacto__redes'>
                  <div className='red'>
                        <img src={instagram} alt="" />
                        <a href="https://www.instagram.com/rdvuniformes/">@rdvuniformes</a>
                  </div>
                  <div className='red'>
                        <img src={whatsapp} alt="" />
                        <a href=" https://wa.me/223154361136">(223)154 361136</a>
                  </div>
                  <div className='red'>
                        <img src={mail} alt="" />
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">rociodelvalle@yahoo.com</a>
                  </div>
              </div>
          </div>
        </div>
        <div className='footer__part2'>
            <p>Desarrollado por <a href="">Stairus</a></p>
            <span>Copyright 2024 | Todos los derechos reservados</span>
        </div>

      </footer>

    </div>
  );

}

export default App;
