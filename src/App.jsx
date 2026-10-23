import React, { useRef, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Check,
  ChevronRight, Clock3, Coffee, CookingPot, Fan, Facebook, Instagram, MapPin,
  Menu, MessageCircle, Microwave, Phone, Shirt, Sparkles, Star,
  WashingMachine, Wrench, X, Zap,
} from 'lucide-react';
import { company, services, extraServices, gallery, comparisons, reviews } from './data/site.js';
import ApplianceGraphic from './components/ApplianceGraphic.jsx';
import CompareSlider from './components/CompareSlider.jsx';
import ContactForm from './components/ContactForm.jsx';
import { useHeroDepth, useShowcaseDepth } from './hooks/useScroll3D.js';

const extraIcons = { CookingPot, Bot, Coffee, Shirt, Zap, Wrench };
const nav = [
  ['#inicio', 'Inicio'], ['#quien-soy', 'Quién soy'], ['#servicios', 'Qué hago'],
  ['#antes-despues', 'Antes y después'], ['#resenas', 'Reseñas'],
];
const sceneInfo = [
  { number: '01', type: 'lavarropas', kicker: 'REPARACIÓN DE LAVARROPAS', title: 'Tu lavarropas, otra vez en marcha.', text: 'Diagnóstico y reparación de lavarropas automáticos y semiautomáticos. Motores, placas, rodamientos y mucho más.' },
  { number: '02', type: 'microondas', kicker: 'REPARACIÓN DE MICROONDAS', title: 'Que vuelva a calentar como debe.', text: 'Evaluamos problemas de encendido, calentamiento y funcionamiento de tu microondas.' },
  { number: '03', type: 'ventiladores', kicker: 'REPARACIÓN DE VENTILADORES', title: 'Que el aire siga circulando.', text: 'Reparamos y realizamos mantenimiento de ventiladores domésticos e industriales.' },
];

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#inicio" aria-label="CSR Reparaciones, volver al inicio">
    <span className="brand-mark"><img src="/images/logo-csr.webp" alt="" width="55" height="55" /></span>
    <span className="brand-title">CSR <strong>Reparaciones</strong><small>Servicio técnico de electrodomésticos</small></span>
  </a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><div className="nav-inner content-width">
    <Brand />
    <nav id="nav-principal" aria-label="Navegación principal" className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
      {nav.map(([href,label])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
      <a className="nav-mobile-service" href="#service" onClick={()=>setMenuOpen(false)}>Solicitar un service</a>
    </nav>
    <a href="#service" className="nav-cta">Solicitar service <ArrowUpRight size={16}/></a>
    <button type="button" className="mobile-menu-btn" aria-label={menuOpen?'Cerrar menú':'Abrir menú'} aria-expanded={menuOpen} aria-controls="nav-principal" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={24}/>:<Menu size={24}/>}</button>
  </div></header>;
}

function Hero() {
  const heroRef = useRef(null);
  useHeroDepth(heroRef);
  return <section id="inicio" className="hero" ref={heroRef}>
    <div className="hero-orb hero-orb-1"/><div className="hero-orb hero-orb-2"/>
    <div className="content-width hero-inner">
      <div className="hero-copy">
        <div className="hero-eyebrow"><span className="availability-dot"/> SERVICE TÉCNICO · SAN NICOLÁS, BS. AS.</div>
        <h1>Reparamos tus <span>electrodomésticos.</span> Recuperamos su funcionamiento.</h1>
        <p>Diagnóstico, reparación y atención personalizada para los equipos que usás todos los días. Especialistas en lavarropas, microondas y ventiladores.</p>
        <div className="hero-actions">
          <a href="#service" className="button button-primary">Solicitar un service <ArrowUpRight size={19}/></a>
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-ghost"><MessageCircle size={19}/> Hablar por WhatsApp</a>
        </div>

      </div>
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-rings"/><div className="hero-machine"><ApplianceGraphic type="lavarropas" /></div>
        <div className="tech-pill tech-pill-1"><span className="tech-pill-symbol">✦</span> DIAGNÓSTICO TÉCNICO</div>
        <div className="tech-pill tech-pill-2"><span className="availability-dot"/> SERVICE EN SAN NICOLÁS</div>
        <div className="hero-stage-caption"><span>CSR / REPARACIONES</span></div>
      </div>
    </div>
    <div className="hero-bottom content-width"><a href="#experiencia" className="scroll-prompt"><span className="scroll-mouse"><span/></span> EXPLORÁ NUESTROS SERVICIOS <ArrowDown size={15}/></a><span>REPARAR ES VOLVER A EMPEZAR.</span></div>
  </section>;
}

function Experience() {
  const ref = useRef(null);
  useShowcaseDepth(ref);
  return <section id="experiencia" className="showcase" ref={ref} aria-label="Animación 3D al desplazarse entre lavarropas, microondas y ventiladores">
    <div className="scroll3d-sticky">
      <div className="content-width showcase-inside">
        <div className="showcase-side">
          <span className="eyebrow"><Sparkles size={14}/> LO QUE HACEMOS</span>
          <h2>Problemas técnicos.<br/><span>Soluciones reales.</span></h2>
          <p>Deslizá hacia abajo. Vas a ver cómo un electrodoméstico sale girando y aparece el siguiente.</p>
          <div className="scroll3d-status" aria-hidden="true">
            <span className="scroll3d-status-title" data-scroll3d-label>LAVARROPAS</span>
            <div className="scroll3d-bars">{sceneInfo.map((s,i)=><span data-scroll3d-bar key={s.type} className={i===0?'is-active':''}/>)}</div>
            <small>EL MOVIMIENTO SIGUE TU SCROLL ↓</small>
          </div>
        </div>
        <div className="scene-stack">
          {sceneInfo.map((s)=><article className={`appliance-scene appliance-scene-${s.number}`} key={s.number}>
            <div className={`appliance-visual appliance-visual-${s.type}`}>
              <div className="appliance-aura"/>
              <div className="appliance-rig">
                <div className="appliance-rig-face"><ApplianceGraphic type={s.type} className="appliance-svg"/></div>
              </div>
            </div>
            <div className="appliance-details"><span className="eyebrow">{s.kicker}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#service">Consultar reparación <ArrowUpRight size={17}/></a></div>
          </article>)}
        </div>
      </div>
      <div className="scroll3d-progress" aria-hidden="true"><div/></div>
    </div>
  </section>;
}

function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return <div className={`section-heading ${light?'section-heading-light':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>;
}

function About() {
  return <section id="quien-soy" className="about section-padding"><div className="content-width about-layout">
    <div className="about-photo"><img src="/images/carlos-trabajando-2.webp" alt="Carlos Rocha trabajando en una instalación técnica a domicilio" loading="lazy" decoding="async" width="750" height="1000"/><span className="about-photo-decor">CSR</span></div>
    <div className="about-copy"><span className="eyebrow">01 / QUIÉN SOY</span><h2>Detrás de cada reparación, <em>hay una persona.</em></h2><p className="about-lead">¡Hola! Soy <strong>Carlos Rocha</strong>, técnico y responsable de CSR Reparaciones.</p>
      <p>Hace <strong>2 años</strong> que me dedico a la reparación de electrodomésticos, ayudando a personas a recuperar el funcionamiento de los equipos que utilizan todos los días.</p>
      <p>Me especializo principalmente en lavarropas, microondas y ventiladores, aunque también realizo diagnósticos y reparaciones de distintos electrodomésticos y equipos eléctricos.</p>
      <p>Mi objetivo es ofrecer una atención cercana, un diagnóstico responsable y soluciones adaptadas a cada problema. Entendemos la importancia que tienen estos equipos en la vida cotidiana.</p>
      <div className="about-values"><div><Check size={17}/> Trato directo y personalizado</div><div><Check size={17}/> Diagnóstico responsable</div><div><Check size={17}/> Experiencia práctica en reparaciones</div></div>
      <a className="inline-link" href="#galeria">Conocé nuestros trabajos <ArrowUpRight size={19}/></a>
    </div>
  </div></section>;
}

function Services() {
  const icons = [WashingMachine, Microwave, Fan];
  return <section id="servicios" className="services section-padding"><div className="content-width"><SectionHeading eyebrow="02 / QUÉ HACEMOS" title="Todo empieza con un buen diagnóstico." subtitle="Nos enfocamos en reparar lo que usás todos los días. Estas son nuestras especialidades y algunos otros equipos que recibimos."/>
    <div className="services-grid">{services.map((s,i)=>{const Icon=icons[i];return <article className="service-card" key={s.slug}>
      <div className="service-card-top"><span>0{i+1} / ESPECIALIDAD</span><Icon size={39} strokeWidth={1.4}/></div><div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.description}</p></div><a className="service-card-link" href="#service" aria-label={`Consultar reparación de ${s.title}`}><ArrowUpRight size={22}/></a>
    </article>;})}</div>
    <div className="extras"><h3>También reparamos</h3><div className="extras-list">{extraServices.map(s=>{const Icon=extraIcons[s.icon];return <a href="#service" key={s.title} className="extra-item"><Icon size={19}/>{s.title}<ChevronRight size={15}/></a>;})}</div></div>
  </div></section>;
}

function Gallery() {
  return <section id="galeria" className="gallery section-padding"><div className="content-width"><div className="gallery-heading"><SectionHeading eyebrow="03 / EN ACCIÓN" title="Así se ve el trabajo de verdad." subtitle="Nada de fotos genéricas: estos son algunos equipos, herramientas y reparaciones de CSR Reparaciones."/><a href={company.instagram} className="inline-link" target="_blank" rel="noopener noreferrer">Más trabajos en Instagram <ArrowUpRight size={18}/></a></div>
    <div className="photo-grid">{gallery.map((photo,i)=><figure key={photo.src} className={i===0?'gallery-photo gallery-photo-feature':'gallery-photo'}><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width="750" height="1000" fetchPriority="low"/><figcaption><span>0{i+1}</span>{photo.label}</figcaption></figure>)}</div>
  </div></section>;
}

function BeforeAfter() {
  return <section id="antes-despues" className="compare section-padding"><div className="content-width"><div className="compare-heading"><SectionHeading eyebrow="04 / ANTES Y DESPUÉS" title="Los resultados se ven." subtitle="Compará dos trabajos reales de recuperación y limpieza de lavarropas. Deslizá la línea para ver el cambio." light/><div className="compare-stamp">ANTES <ArrowRight size={18}/> DESPUÉS</div></div>
    <div className="comparison-grid">{comparisons.map(c=><CompareSlider key={c.id} comparison={c}/>)}</div>
  </div></section>;
}

function Reviews() {
  const [showAll, setShowAll] = useState(false);
  return <section id="resenas" className="reviews section-padding"><div className="content-width"><div className="reviews-header"><SectionHeading eyebrow="05 / RESEÑAS REALES" title="Lo mejor lo cuentan nuestros clientes." subtitle="Opiniones de Google compartidas por nuestros clientes. Conocé cómo fue su experiencia con CSR Reparaciones."/><div className="review-source"><div className="google-g">G</div><span>Opiniones de<br/><strong>Google</strong></span></div></div>
    <p className="reviews-selection-note">Esta es una selección de opiniones de clientes. Podés consultar todas las reseñas, sin filtros, en nuestro perfil de Google.</p>
    <div className="reviews-grid">{reviews.slice(0,showAll?reviews.length:6).map((r,i)=><article className="review-card" key={`${r.author}-${i}`}><div className="review-card-top"><span className="review-avatar">{r.author.charAt(0).toUpperCase()}</span><div><strong>{r.author}</strong><span>Reseña de Google</span></div><span className="review-quote" aria-hidden="true">”</span></div><div className="review-stars" aria-label={`${r.stars} de 5 estrellas`}>{Array.from({length:r.stars},(_,k)=><Star key={k} fill="currentColor" size={15}/>)}</div><p>{r.text}</p></article>)}</div>
    <div className="reviews-footer">{!showAll&&<button className="button button-outline-dark" type="button" onClick={()=>setShowAll(true)}>Mostrar las {reviews.length} reseñas destacadas <ArrowDownRight size={17}/></button>}<a href={company.google} target="_blank" rel="noopener noreferrer" className="inline-link">Ver todas las opiniones en Google <ArrowUpRight size={19}/></a></div>
  </div></section>;
}

function Contact() {
  return <section id="service" className="contact section-padding"><div className="content-width contact-layout"><div className="contact-copy"><span className="eyebrow">06 / CONTACTO</span><h2>¿Tu equipo dejó de funcionar? <span>Hablemos.</span></h2><p>Contanos qué le pasa a tu electrodoméstico. Te ayudamos a dar el primer paso hacia una solución.</p>
    <div className="contact-direct"><a href={company.whatsapp} target="_blank" rel="noopener noreferrer"><span><MessageCircle size={22}/></span><span><small>ESCRIBINOS POR WHATSAPP</small><strong>{company.phoneDisplay}</strong></span><ArrowUpRight size={19}/></a><a href={`tel:${company.phoneInternational}`}><span><Phone size={21}/></span><span><small>O LLAMANOS</small><strong>{company.phoneDisplay}</strong></span><ArrowUpRight size={19}/></a><div className="contact-local"><MapPin size={20}/><div><strong>San Nicolás de los Arroyos</strong><p>Atención a domicilio en San Nicolás. Para otras localidades, consultá por recepción de equipos.</p></div></div></div>
    <div className="contact-social"><span>SEGUINOS EN LAS REDES</span><a aria-label="Instagram de CSR Reparaciones" href={company.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={21}/></a><a aria-label="Facebook de CSR Reparaciones" href={company.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20}/></a></div>
  </div><ContactForm/></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="content-width"><div className="footer-top"><div className="footer-about"><Brand footer/><p>Reparación de lavarropas y electrodomésticos. Servicio técnico en San Nicolás de los Arroyos, Buenos Aires.</p></div><div className="footer-links"><h3>Explorá</h3>{nav.map(([href,label])=><a key={href} href={href}>{label}</a>)}<a href="#service">Solicitar un service</a></div><div className="footer-links"><h3>Contacto</h3><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {company.phoneDisplay}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={company.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CSR Reparaciones. Todos los derechos reservados.</span><a href="/privacidad.html">Política de privacidad</a><a href="#inicio" className="back-top">Volver arriba ↑</a></div></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido"><Hero/><Experience/><About/><Services/><Gallery/><BeforeAfter/><Reviews/><Contact/></main><Footer/><a className="floating-whatsapp" href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={27}/><span>CONSULTANOS</span></a></>;
}
