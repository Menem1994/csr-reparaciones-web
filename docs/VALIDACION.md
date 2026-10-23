# Validación de la primera entrega — 23/10/2026

## Comprobaciones realizadas en el entorno de generación

- [x] Los cinco archivos JSX principales fueron analizados mediante el compilador de TypeScript en modo JSX: **sin errores de sintaxis**.
- [x] La hoja de estilos CSS fue analizada con PostCSS: **sin errores de sintaxis**.
- [x] Los archivos JavaScript sin JSX y los scripts de SEO superaron las comprobaciones de sintaxis de Node.
- [x] Las fotografías se convirtieron a WebP y están presentes en `public/images`.
- [x] Se comprobaron las rutas de imágenes mencionadas en los datos comerciales.
- [x] Los dos pares exactos `lavarropas antes 1 / despues 1` y `lavarropas antes 2 / despues 2` existen.
- [x] Se incluye la política de privacidad inicial y el archivo `.env.example`.
- [x] Se excluyeron del proyecto las imágenes promocionales que contienen personajes de ficción.

## Comprobaciones todavía pendientes

- [ ] **Compilación real `npm install` + `npm run build`**. La descarga de npm falló por la resolución de red del entorno de generación (`registry.npmjs.org`: `EAI_AGAIN`). No se pudo instalar React/Vite y ejecutar la compilación final.
- [ ] **Prueba visual completa del sitio en el navegador**. El navegador automatizado bloqueó tanto las páginas `localhost` como los archivos locales por una restricción del entorno.
- [ ] **Comprobar a mano el GSAP scroll 3D y la interacción móvil** en la computadora del propietario.
- [ ] **Formulario real al correo:** requiere crear/confirmar el formulario de Formspree y probar un envío, comprobando el correo recibido.
- [ ] **SEO final (`canonical`, sitemap)**: depende de la URL pública que te asigne el alojamiento.
- [ ] **Evaluación jurídica de la privacidad y condiciones vigentes de servicios externos** antes de publicar.

### Interpretación

Se entrega **código fuente completo preparado para instalar**, pero no se afirma que esté ejecutado ni completamente probado en producción. Los pasos de `README.md` muestran cómo realizar las verificaciones pendientes en Windows, con explicación de cada comando.
