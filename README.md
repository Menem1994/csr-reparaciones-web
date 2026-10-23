# CSR Reparaciones — landing page profesional

Proyecto completo **React + Vite** para CSR Reparaciones (San Nicolás de los Arroyos, Buenos Aires). Incluye: diseño responsive, experiencia 3D de scroll nativo sin dependencias adicionales, ilustraciones originales SVG, fotos reales optimizadas, 2 comparadores antes/después, 11 reseñas proporcionadas por el negocio, sección de contacto y política de privacidad.

> **Estado:** primera versión del código lista para instalar y probar localmente. El formulario **no envía correos** hasta que se configure Formspree. Mientras tanto, prepara la consulta y abre WhatsApp para que el visitante la envíe voluntariamente. La publicación en Internet tampoco está realizada: se hace después, desde tu cuenta.

## 1) ¿Qué hace cada tecnología?

- **HTML:** es el esqueleto de la página (títulos, párrafos, enlaces, formularios).
- **CSS:** da apariencia, colores, tamaños y diseño móvil.
- **JavaScript:** hace que botones, comparadores y formularios reaccionen.
- **React:** permite organizar la página en componentes reutilizables.
- **Vite:** es el entorno de trabajo y la herramienta que prepara la versión final. *React y Vite se usan juntos; Vite no reemplaza React.*
- **Scroll 3D nativo (JavaScript + CSS):** mueve tres escenas según la posición real del scroll, con rotación y profundidad; usa `position: sticky` en escritorio y giro individual en celulares. Se respeta la reducción de movimiento.
- **Formspree:** servicio externo opcional que recibe formularios y los reenvía a un email. No guardamos credenciales privadas en el navegador.
- **Git:** historial local de cambios. **GitHub:** copia del repositorio en Internet y puente para la publicación.
- **Netlify:** ejemplo de alojamiento compatible con el sitio y apto para una primera publicación gratuita, sujeto a los límites de su plan.

## 2) Preparación en Windows (PowerShell)

**A. Instalá Node.js (versión LTS) y Git, si no los tenés.**

Comprobá desde una ventana de PowerShell:

```powershell
node --version
npm --version
git --version
```

`node` ejecuta herramientas de JavaScript; `npm` descarga las librerías del proyecto; `git` gestiona versiones.

**B. Extraé el ZIP** en una carpeta, por ejemplo `C:\Users\USUARIO\Desktop\CSR-Reparaciones`. Luego abrí PowerShell desde esa carpeta (con VS Code: Terminal > Nuevo terminal).

**C. Instalá lo que necesita el proyecto:**

```powershell
npm install
```

Esto lee el archivo `package.json` e instala las dependencias en `node_modules`. **No** necesitás un `venv` de Python, porque acá usamos Node.js.

**D. Iniciá el servidor local:**

```powershell
npm run dev
```

Abrí la dirección que aparezca en la consola (habitualmente `http://localhost:5173`). Este servidor es solamente para desarrollar: si apagás tu PC, la página deja de verse ahí.

**E. Detenelo** con `Ctrl + C`.

## 3) Cambiar los contenidos

| Qué querés cambiar | Archivo |
|---|---|
| Teléfono, WhatsApp, redes, correo, enlace de Google | `src/data/site.js` → `company` |
| Servicios principales y secundarios | `src/data/site.js` → `services`, `extraServices` |
| Fotografías de trabajos | `public/images/` y `src/data/site.js` → `gallery` |
| Antes y después | `src/data/site.js` → `comparisons` |
| Opiniones de Google | `src/data/site.js` → `reviews` |
| Texto “Quién soy” | `src/App.jsx` → componente `About` |
| Animación 3D de scroll | `src/hooks/useScroll3D.js` → hook `useShowcaseDepth` |
| Diseño y colores | `src/styles.css` |
| Política de privacidad | `public/privacidad.html` |
| Meta etiquetas HTML | `index.html` |

Las fotografías adjuntas por el propietario se convirtieron a **WebP**, que suele pesar menos que JPG/PNG. Para conservar la correspondencia original, los pares usados son:

- `lavarropas antes 1.jpg` → `lavarropas-antes-1.webp` y `lavarropas despues 1.jpg` → `lavarropas-despues-1.webp`.
- `lavarropas antes 2.jpg` → `lavarropas-antes-2.webp` y `lavarropas despues 2.jpg` → `lavarropas-despues-2.webp`.

Si necesitás las fotos originales para otro fin, usá los archivos de tu colección original: el proyecto incluye las copias optimizadas.

## 4) Activar las solicitudes al correo (Formspree)

Sin ninguna configuración, el formulario genera un mensaje en WhatsApp: **el visitante debe pulsar “Enviar” allí**. No se envía nada en segundo plano y la página nunca muestra un “recibido” falso.

Para que el formulario efectivamente envíe a `saidrochaa@outlook.com`:

1. Registrate con tu cuenta en [Formspree](https://formspree.io/) (no compartas tu contraseña).
2. Creá un formulario y verificá en el panel el correo `saidrochaa@outlook.com` como destino.
3. Copiá la URL pública de tu formulario, de forma `https://formspree.io/f/xxxxxxxx`.
4. En la carpeta raíz, creá un archivo `.env.local` (podés copiar `.env.example`) y completá:

   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_ID_REAL
   ```

5. Reiniciá el servidor de desarrollo (`Ctrl + C` y `npm run dev`) o generá una nueva versión de producción. Probá con **una consulta real de prueba** desde el sitio y comprobá que llegó al correo y al panel de Formspree.
6. En Netlify, agregá esa variable también en la configuración de variables de entorno del sitio y volvé a desplegar (el archivo `.env.local` **no** se sube a GitHub).

**Límites:** el plan gratuito de Formspree ofrece una cantidad limitada de envíos mensuales, según el plan vigente. Cuenta con protección antispam básica; el pequeño campo oculto del sitio es una medida adicional del lado cliente, **no** reemplaza los controles del servicio. El identificador público del formulario en el frontend no es una contraseña.

## 5) Preparar la web para SEO y Google

El proyecto incorpora:

- Texto HTML **pregenerado en el build** con React server rendering, además de la interactividad en el navegador. Esto facilita que buscadores lean el contenido sin depender solo de JavaScript.
- Meta `title`, `description`, `robots`, Open Graph, Twitter y campos de localidad.
- Datos estructurados JSON-LD de un `LocalBusiness` con servicio y ciudad.
- `robots.txt` y un generador de `sitemap.xml`.
- Un solo H1, encabezados jerárquicos y textos alternativos en fotos.

**Importante:** todavía no conocemos la URL definitiva. No configuramos un canonical inventado. Cuando Netlify te asigne una URL real (o compres un dominio), escribila en `.env.local`:

```env
VITE_SITE_URL=https://TU-SITIO-REAL.netlify.app
```

Reemplazá la URL del ejemplo por la tuya, sin barra final. Configurá la misma variable en Netlify y **volvé a desplegar**. `npm run build` creará automáticamente `canonical`, `og:url`, URLs absolutas de imágenes sociales y `dist/sitemap.xml`. Luego podrás añadir `https://TU-SITIO-REAL.netlify.app/sitemap.xml` a [Google Search Console](https://search.google.com/search-console/about).

No agregamos estrellas o puntuación promedio en datos estructurados porque no se proporcionó un promedio verificado; además, Google limita la visualización de reseñas autopublicadas para negocios locales.

## 6) Crear una versión final

```powershell
npm run build
npm run preview
```

`build` prepara el sitio público en `dist/`, pregenera HTML con React y crea archivos SEO. `preview` permite abrir esa versión en tu computadora. No copies `src/` o `node_modules/` al hosting: Netlify construirá el proyecto automáticamente.

## 7) Git y GitHub — aprender con tu proyecto

Una vez comprobada la web local:

```powershell
git init
git add .
git commit -m "Primera versión de CSR Reparaciones"
```

- `git init`: inicia el historial del proyecto.
- `git add .`: selecciona archivos para la próxima versión (respeta `.gitignore`).
- `git commit`: guarda esa versión con un mensaje.

Después creá un repositorio **vacío** en GitHub, copiá su URL y ejecutá los comandos que GitHub te muestre para asociar `origin` y hacer `git push`. El repositorio puede ser **privado**, aunque la web publicada sea pública. **Nunca subas `.env.local`.**

## 8) Publicar gratis con Netlify

1. Creá tu cuenta en [Netlify](https://www.netlify.com/) y autorizá el acceso al repositorio de GitHub correspondiente.
2. Elegí **Add new project / Import an existing project** o la opción equivalente vigente.
3. Seleccioná el repositorio.
4. Configuración de compilación:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Framework:** Vite (si pregunta)

5. Incorporá la variable `VITE_FORMSPREE_ENDPOINT` si ya configuraste tu formulario.
6. Desplegá. Netlify te dará una URL pública con HTTPS sin exigir que tu PC esté encendida.
7. Agregá esa URL como `VITE_SITE_URL` en la configuración del sitio y volvé a desplegar para generar el sitemap y el canonical correctos.
8. Probá el móvil, WhatsApp, las comparaciones, la página `/privacidad.html` y el formulario real.
9. Cuando quieras, podés conectar un dominio propio: se configura por DNS. Si la web pertenece a un cliente, **dominio, hosting y servicio de formularios deben estar preferentemente en cuentas controladas por él**.

**Nota de costo:** los planes gratuitos tienen límites que pueden cambiar. Comprobá sus condiciones actuales y el consumo antes de ofrecer un plan “gratis para siempre” a un cliente. El dominio propio normalmente se paga por separado.

## 9) Privacidad, pruebas y asuntos pendientes

- Revisá `public/privacidad.html` antes de publicarlo: es un **borrador inicial**, no una garantía legal. Confirmá el proveedor de formularios, ubicación de alojamiento y plazos reales de conservación.
- Los nombres de autores y textos de reseñas proceden de capturas compartidas por el dueño. El vínculo a Google aportado es **una búsqueda**, no una URL directa a la ficha; reemplazalo por la ficha oficial cuando tengas el enlace exacto.
- No publicamos una dirección particular ni horarios no confirmados. La cobertura principal anunciada es San Nicolás; fuera de la ciudad, la página invita a consultar por recepción de equipos.
- No hay sistema propio de usuarios ni pagos, porque el proyecto es una landing, no una tienda.
- **Antes de recibir clientes reales**, enviá una prueba con Formspree y verificá llegada al correo. Probar el formulario visualmente no significa que el envío esté configurado.

## 10) Estructura del proyecto

```text
csr-reparaciones-web/
├── .env.example                # Ejemplo de ajustes públicos
├── .gitignore                  # Archivos que no se suben al repositorio
├── index.html                  # Meta etiquetas y estructura HTML base
├── package.json                # Librerías y comandos npm
├── vite.config.js              # Configuración de Vite
├── src/
│   ├── main.jsx                # Activa React en el navegador
│   ├── App.jsx                 # Secciones principales de React
│   ├── styles.css              # Diseño y versión móvil
│   ├── hooks/useScroll3D.js # Conexión de React con la animación
│   ├── lib/scroll3d.js      # Motor 3D en JavaScript nativo
│   ├── data/site.js            # Contenido editable del negocio
│   └── components/
│       ├── ApplianceGraphic.jsx # Ilustraciones originales de equipos
│       ├── CompareSlider.jsx    # Antes/después con slider real
│       └── ContactForm.jsx      # Formulario y fallback WhatsApp
├── public/
│   ├── images/                # Fotografías reales optimizadas
│   ├── privacidad.html        # Política de privacidad
│   ├── robots.txt             # Reglas para rastreadores
│   └── favicon.svg            # Ícono del navegador
└── scripts/
    ├── prerender.mjs          # HTML pregenerado para buscadores
    └── seo.mjs                # Canonical, Schema.org y sitemap
```

## 11) Comandos rápidos

| Comando | Qué hace |
|---|---|
| `npm install` | Descarga las bibliotecas necesarias |
| `npm run dev` | Abre un servidor de desarrollo local |
| `npm run build` | Genera la versión optimizada en `dist/` |
| `npm run preview` | Visualiza la versión de producción localmente |
| `git status` | Muestra los archivos modificados |
| `git add .` | Selecciona los cambios |
| `git commit -m "Mensaje"` | Guarda una versión |

---

**Licencias:** el propietario suministró las fotos y opiniones para este proyecto. Las ilustraciones de electrodomésticos son SVG producidos como parte del proyecto. Antes de usar material con personajes, música o marcas de terceros en otra web, confirmá que contás con derechos de uso; no se incorporaron los gráficos con personajes de ficción en esta versión.


## Versión 1.1 — Correcciones solicitadas

- El hero ahora gira el lavarropas en perspectiva 3D a medida que se desplaza la página.
- En computadoras (más de 820 px), el bloque de tres servicios permanece fijo temporalmente mediante CSS `sticky` y las figuras se cruzan con rotación Y y profundidad al hacer scroll. En celulares se aplica rotación y acercamiento **por cada tarjeta**, sin bloquear el scroll. Se respeta `prefers-reduced-motion`.
- Eliminados los textos decorativos «Trabajos reales. Atención cercana. Tu técnico en San Nicolás», «TRABAJO REAL, PERSONAS REALES» y los números 01-03 de las ilustraciones.
- Favicon blanco con silueta y engranajes negros (`public/favicon.svg`). En Chrome, si seguís viendo el anterior, abrí incógnito o refrescá el favicon cacheado.
- Las opiniones mostradas son **una selección de 11 reseñas facilitadas por el propietario**. «Ver todas las opiniones en Google» abre la búsqueda pública en Google; no implica que la web muestre las 92 ni puede ocultar opiniones existentes en Google. Para listar dinámicamente todas hace falta autorizar Google Business Profile API en una ficha verificada y revisar sus políticas y permisos.
- Para mejorar rendimiento, no se cargan fuentes externas en pantallas pequeñas, se conservan imágenes WebP y carga diferida, y se difiere contenido por debajo de la primera pantalla con `content-visibility`. Se necesita Lighthouse **en modo producción** para saber la puntuación real.
- Se añadieron cabeceras de seguridad en `public/_headers` (Netlify) y `vercel.json` (Vercel). Incluyen CSP, anti-iframe, protección contra MIME sniffing, políticas de permisos y caché. No protegen contra todas las vulnerabilidades por sí solas.

### Medir Lighthouse correctamente (no medir el servidor de desarrollo)

```powershell
# Desde la carpeta del proyecto
npm run build
npm run preview
```

Luego abrí en Chrome la URL de `preview` (habitualmente `http://localhost:4173`) y ejecutá Lighthouse en una ventana de incógnito sin extensiones. Compará móvil y escritorio, y compartí la sección «Oportunidades/Diagnósticos» y las métricas LCP, CLS, INP, FCP, TBT; las cifras que mediste en `npm run dev` no describen necesariamente el sitio publicado.

### Security review antes de publicar

- Configurar el proveedor de formularios y sus mecanismos anti-spam (validación server-side, límites/rate limiting y CAPTCHA/Turnstile si corresponde). El honeypot y los `maxLength` del navegador no bastan.
- Nunca guardar claves privadas ni tokens en variables `VITE_` (se publican dentro del JavaScript). Solo poner el endpoint público de Formspree.
- Hacer `npm audit` con dependencias instaladas y corregir advertencias evaluando compatibilidad.
- El hosting debe ofrecer HTTPS, protección básica contra abusos y mantener el sitio actualizado.
- Confirmar la URL definitiva para emitir canonical, sitemap y Open Graph absolutos configurando `VITE_SITE_URL` en el despliegue.



## Versión 1.3 — Scroll tridimensional visible y comprobado

### El fallo corregido

El CSS de la versión anterior incluía, dentro de las reglas móviles,
`transform: none !important` y `opacity: 1 !important`. Esas reglas tienen
precedencia incluso sobre las transformaciones normales puestas por JavaScript,
y **anulaban la animación del escenario en teléfonos**. Además, el escenario
anterior carecía de una verificación visual clara y era demasiado sutil.

### Cómo funciona ahora

- Toda la sección **«Problemas técnicos. Soluciones reales.»** ocupa aproximadamente
  3,5 pantallas de scroll, y su contenido se fija con `position: sticky` durante
  ese tramo tanto en escritorio como en móvil.
- Tres ilustraciones tienen posiciones 3D distintas (rotación de hasta 78°, escala,
  profundidad en el eje Z y desplazamientos laterales). Pasan en orden:
  lavarropas → microondas → ventiladores.
- Se añadió volumen geométrico mediante caras laterales/superiores CSS sobre las
  figuras SVG: **son efectos CSS 3D, no modelos volumétricos WebGL**.
- La etiqueta visible LAVARROPAS / MICROONDAS / VENTILADORES y la barra inferior
  cambian con el scroll, lo que permite observar inmediatamente si funciona.
- No existe dependencia de GSAP. El motor está en `src/lib/scroll3d.js` y React
  lo activa mediante `src/hooks/useScroll3D.js`.
- Se respeta el ajuste de accesibilidad de reducción de movimiento: en ese caso,
  se muestran las tres tarjetas estáticas, sin bloquear el scroll.

### Verificar en tu computadora (evitar confundir versión vieja con nueva)

1. **Extraé el ZIP en una carpeta NUEVA**, no mezcles sus archivos con la v1.2.
2. Abrí la carpeta `csr-reparaciones-web` en VS Code y ejecutá:

```powershell
npm install
npm run dev
```

3. Mirá que el título cambie durante el scroll desde lavarropas a microondas y ventiladores.
4. Para comprobar que cargaste la 1.3, abrí la consola del navegador (F12) y ejecutá:

```javascript
document.querySelector('meta[name="csr-build"]')?.content
// Debe imprimir "1.3.0"
```

5. Si sigue quieta, ejecutá:

```javascript
window.matchMedia('(prefers-reduced-motion: reduce)').matches
// true = el dispositivo solicita desactivar las animaciones
```

Y para medir el avance del efecto desde la propia sección:

```javascript
document.querySelector('#experiencia')?.dataset.scroll3dProgress
// Un valor entre "0.000" y "1.000" que cambia mientras bajás por la escena
```

En desarrollo, las DevTools permiten desactivar la emulación de movimiento
reducido. No es recomendable forzar la animación a usuarios que han solicitado
menos movimiento.

### Pruebas automatizadas hechas en el entorno de desarrollo del proyecto

Se comprobó **el motor JavaScript y las reglas CSS de la escena, aislados del
compilador React**, con Chromium y emulación de anchos 1400 px y 390 px:
- La posición del panel es sticky; se mantiene junto al encabezado.
- La variable `data-scroll3d-progress` pasa de 0 a 1 según el scroll.
- A 47% se ve microondas con opacidad 1, y a 97% ventiladores con opacidad 1.
- Los estilos calculados incluyen matrices `matrix3d(...)` para los giros.
- No hubo excepciones JavaScript en esas pruebas aisladas.

**Limitación:** no se pudo realizar `npm install` ni ejecutar el build de React
completo en este entorno por bloqueo de acceso a npm. Esto deberá comprobarse
con `npm run build` y `npm run preview` en tu computadora antes de publicarlo.
