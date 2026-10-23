# Probar la versión 1.2 del scroll 3D

## Vista de escritorio

1. Ejecutá `npm install` y `npm run dev` en esta nueva carpeta, o `npm run build` y `npm run preview`.
2. Desde el inicio, bajá despacio: el lavarropas grande del inicio debe girar progresivamente a un costado y alejarse.
3. Seguí hasta **Problemas técnicos. Soluciones reales.**: el escenario permanece en pantalla mientras al mover la rueda entra el **microondas** desde la derecha y se retira el **lavarropas** a la izquierda; después ocurre lo mismo entre microondas y ventilador.
4. En un monitor de 1280 × 800, el escenario completo dura aproximadamente 3,6 pantallas. El movimiento está vinculado a la posición de scroll, no a un temporizador.

## Vista celular

Las tres tarjetas se muestran de forma vertical y los equipos se inclinan al pasar por el centro de la pantalla. No hay un pin que bloquee el scroll.

## Si no se mueve

Abrí **F12 → Console** en Chrome y pegá individualmente:

```js
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

`true` significa que el navegador está recibiendo la preferencia de reducir animaciones; por accesibilidad se desactivan. En Chrome también podés verificar DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion.

```js
document.querySelector('#experiencia')?.className
```

En escritorio debe incluir `scroll3d-ready`; en móvil `scroll3d-mobile`.

```js
document.querySelector('.appliance-scene-02')?.style.transform
```

En escritorio, al desplazarte durante la sección, debería mostrar `translate3d`, `rotateY` y `rotateX` con valores que cambian.

Si la consola muestra errores rojos de JavaScript, copiá el primero.

## Qué se verificó

- Se validó sintaxis JavaScript del hook mediante `node --check`.
- Se comprobó la lógica de scroll en Chromium con un escenario de prueba que reutiliza el CSS y el hook reales: rotación perceptible en escritorio y móvil; el pin sticky funcionó.
- **No se pudo ejecutar `npm run build` del proyecto completo en este entorno**: la descarga de dependencias de npm fue bloqueada. Hacer esa prueba en tu computadora.
