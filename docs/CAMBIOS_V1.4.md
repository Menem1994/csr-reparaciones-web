# CSR Reparaciones — Versión 1.4

Corrección visual de los electrodomésticos del scroll 3D.

- Se eliminaron las caras laterales/superiores decorativas independientes del SVG, que no coincidían con la silueta al rotar y podían parecer piezas flotantes.
- Se mantiene el comportamiento sticky, las rotaciones y el desplazamiento 3D del scroll.
- Rejilla del ventilador con radios completos y círculos concéntricos simétricos.
- Se eliminó una línea decorativa dentro del microondas que podía confundirse con un fallo.
- Los degradados SVG tienen identificadores únicos por instancia para evitar conflictos entre iconos.
- No se han cambiado el contenido, la navegación, fotografías ni formularios.

## Prueba local

```powershell
npm install
npm run dev
```

Probá la animación en la sección «Problemas técnicos. Soluciones reales.» y comprobá que cada electrodoméstico se vea correcto durante la rotación.

Si queda un defecto puntual, enviar captura indicando cuál equipo y en qué momento del giro.
