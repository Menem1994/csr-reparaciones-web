# Reparación de scroll 3D — v1.3

La sección «Problemas técnicos. Soluciones reales.» ahora se mantiene fija durante
el desplazamiento y muestra, en orden, lavarropas, microondas y ventiladores,
con rotación amplia en perspectiva y profundidad CSS 3D.

## Causa identificada

Una antigua regla para móvil forzaba `transform: none !important` y anulaba los
cambios de JavaScript. Está corregida. El nuevo escenario se mantiene en pantalla
con `position: sticky` y JS independiente de bibliotecas de animación.

## Comprobaciones

En consola (`F12`):

- `document.querySelector('meta[name="csr-build"]')?.content` debe devolver `1.3.0`.
- `window.matchMedia('(prefers-reduced-motion: reduce)').matches` debe devolver
  `false` para que funcione la animación. Si es `true`, se presenta la alternativa
  accesible sin movimiento.
- `document.querySelector('#experiencia')?.dataset.scroll3dProgress` debe cambiar
  entre `0.000` y `1.000` cuando bajás dentro de esa sección.

Asegurate de extraer en una carpeta nueva y abrir la URL del servidor nuevo,
para no comparar accidentalmente con una versión anterior en otra pestaña.
