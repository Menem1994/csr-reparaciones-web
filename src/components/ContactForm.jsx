import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { company } from '../data/site.js';



const applianceTypes = ['Lavarropas', 'Microondas', 'Ventilador', 'Freidora de aire', 'Pava eléctrica', 'Aspiradora robot', 'Cafetera', 'Secarropas', 'Otro'];

export default function ContactForm() {
  
  const [error, setError] = useState('');

    
function submit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  setError('');

  // Campo oculto antispam
  if (String(data.get('website') || '').trim()) {
    setError('No se pudo procesar la solicitud.');
    return;
  }

  // Construimos el mensaje con los datos del cliente
  const msg = [
    'Hola CSR Reparaciones, quiero solicitar un service.',
    `Nombre: ${data.get('nombre')}`,
    `Teléfono: ${data.get('telefono')}`,
    `Localidad: ${data.get('localidad')}`,
    `Equipo: ${data.get('electrodomestico')}`,
    `Marca/modelo: ${data.get('modelo') || 'No especificado'}`,
    `Problema: ${data.get('problema')}`,
    `Contacto preferido: ${data.get('preferencia')}`,
  ].join('\n');

  // Abrimos WhatsApp con el mensaje preparado
  window.location.assign(
    `${company.whatsapp}?text=${encodeURIComponent(msg)}`
  );
}


  return (
    <div className="form-shell">
      <div className="form-topline"><span className="availability-dot"/> SOLICITUD DE REPARACIÓN <span className="form-topline-right">01 / 01</span></div>
      <h3>Contanos qué pasó.</h3>
      <p className="form-intro">Completá los datos y evaluamos tu consulta. Sin compromiso de contratación.</p>
      <form onSubmit={submit} className="contact-form">
          <div className="form-two-col">
            <label>Nombre y apellido <span>*</span><input name="nombre" required minLength="2" maxLength="100" autoComplete="name" placeholder="Tu nombre" /></label>
            <label>Teléfono <span>*</span><input name="telefono" required type="tel" minLength="7" maxLength="30" autoComplete="tel" placeholder="336 000-0000" /></label>
          </div>
          <div className="form-two-col">
            <label>Localidad <span>*</span><input name="localidad" required maxLength="100" autoComplete="address-level2" placeholder="Ej. San Nicolás" /></label>
            <label>Electrodoméstico <span>*</span><select name="electrodomestico" defaultValue="" required><option value="" disabled>Seleccioná una opción</option>{applianceTypes.map((type)=><option key={type} value={type}>{type}</option>)}</select></label>
          </div>
          <label>Marca y modelo (opcional)<input name="modelo" maxLength="120" placeholder="Ej. Samsung WA80" /></label>
          <label>¿Qué problema tiene? <span>*</span><textarea name="problema" required minLength="10" maxLength="2500" rows="4" placeholder="Contanos qué hace el equipo, desde cuándo falla..." /></label>
          <fieldset className="contact-options"><legend>¿Cómo preferís que te contactemos?</legend><label><input type="radio" name="preferencia" value="WhatsApp" defaultChecked /> WhatsApp</label><label><input type="radio" name="preferencia" value="Llamada"/> Llamada</label></fieldset>
          <label className="privacy-check"><input type="checkbox" name="consentimiento" required value="Aceptado" /> <span>Acepto el tratamiento de mis datos para responder esta consulta, de acuerdo con la <a href="/privacidad.html" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</span></label>
          <div className="visually-hidden" aria-hidden="true"><label>No completar<input type="text" name="website" tabIndex="-1" autoComplete="off" /></label></div>
          {error && <p role="alert" className="form-error">{error}</p>}
          <button
  className="button button-primary form-submit"
  type="submit"
>
  Continuar por WhatsApp
  <ArrowUpRight size={18} />
</button>
          <small className="form-helper">
  Al continuar, se abrirá WhatsApp con tu consulta preparada.
  Tendrás que tocar Enviar para compartirla.
</small>
</form>
      
      <div className="form-whatsapp"><MessageCircle size={19}/><span>¿Preferís hablar directamente?</span><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">Abrir WhatsApp <ArrowUpRight size={15}/></a></div>
    </div>
  );
}
