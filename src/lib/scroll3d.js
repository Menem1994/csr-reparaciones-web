
// Un solo listener de scroll por escena; solo actualiza transform y opacidad.
const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
const smoothstep = (start, end, value) => {
  const x = clamp((value - start) / (end - start));
  return x * x * (3 - 2 * x);
};

function onScrollFrame(render) {
  let animationFrame = 0;
  const schedule = () => {
    if (animationFrame) return;
    animationFrame = window.requestAnimationFrame(() => {
      animationFrame = 0;
      render();
    });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);
  schedule();
  return () => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    window.removeEventListener('pageshow', schedule);
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
  };
}

export function attachHeroDepth(section) {
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const machine = section.querySelector('.hero-machine');
    if (!machine) return;
    section.classList.add('hero-scroll-enabled');
    const stop = onScrollFrame(() => {
      const r = section.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height));
      machine.style.transform = `perspective(750px) translate3d(${Math.round(80 * p)}px,${Math.round(-90 * p)}px,${Math.round(-300 * p)}px) rotateY(${-68 * p}deg) rotateX(${21 * p}deg) scale(${1 - .22 * p})`;
    });
    return () => {
      stop();
      section.classList.remove('hero-scroll-enabled');
      machine.style.transform = '';
    };
}

// Animación protagonista: sección sticky de 3 pantallas, 3 aparatos en profundidad.
// No depende de GSAP ni de importaciones asíncronas.
export function attachShowcaseDepth(section) {
    if (!section) return;
    const cards = [...section.querySelectorAll('.appliance-scene')];
    const label = section.querySelector('[data-scroll3d-label]');
    const bars = [...section.querySelectorAll('[data-scroll3d-bar]')];
    if (cards.length !== 3 || !label) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) {
      section.classList.add('scroll3d-reduced');
      return () => section.classList.remove('scroll3d-reduced');
    }

    const names = ['LAVARROPAS', 'MICROONDAS', 'VENTILADORES'];
    const setCard = (element, x, y, z, turn, scale, opacity) => {
      element.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${z.toFixed(1)}px) rotateY(${turn.toFixed(1)}deg) rotateX(${(Math.abs(turn) * .13).toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      element.style.opacity = opacity.toFixed(3);
      element.style.visibility = opacity < .015 ? 'hidden' : 'visible';
      element.style.pointerEvents = opacity > .8 ? 'auto' : 'none';
    };

    // Esta clase solo se añade una vez que el hook está montado. Sin JS, los tres
    // servicios se muestran normalmente uno debajo del otro (degradación segura).
    section.classList.add('scroll3d-active');
    let lastActive = -1;
    const render = () => {
      const viewport = window.innerHeight;
      const header = window.innerWidth <= 620 ? 69 : 78;
      const sectionRect = section.getBoundingClientRect();
      const trackLength = Math.max(1, section.offsetHeight - (viewport - header));
      const p = clamp((header - sectionRect.top) / trackLength);
      const first = smoothstep(.12, .40, p);
      const second = smoothstep(.60, .88, p);
      const offset = Math.min(window.innerWidth * .68, 680);
      const z = 800;

      // Izquierda: se va el lavarropas. Centro: aparece y se va el microondas.
      // Derecha: entra el ventilador. Los ángulos son amplios (78°).
      setCard(cards[0], -offset * first, -30 * first, -z * first, -78 * first, 1 - .47 * first, 1 - first);
      setCard(cards[1], offset * (1 - first) - offset * second, 25 * (1 - first) - 30 * second,
        -z * (1 - first) - z * second, 78 * (1 - first) - 78 * second,
        .53 + .47 * first - .47 * second, first * (1 - second));
      setCard(cards[2], offset * (1 - second), 24 * (1 - second), -z * (1 - second),
        78 * (1 - second), .53 + .47 * second, second);

      const active = p < .28 ? 0 : p < .72 ? 1 : 2;
      if (lastActive !== active) {
        lastActive = active;
        label.textContent = names[active];
        bars.forEach((bar, i) => bar.classList.toggle('is-active', i === active));
      }
      section.style.setProperty('--scroll3d-progress', `${(100 * p).toFixed(2)}%`);
      // Sirve para inspeccionar en DevTools: el valor cambia de 0 a 1 al desplazarte.
      section.dataset.scroll3dProgress = p.toFixed(3);
    };

    const stop = onScrollFrame(render);
    return () => {
      stop();
      section.classList.remove('scroll3d-active');
      section.style.removeProperty('--scroll3d-progress');
      delete section.dataset.scroll3dProgress;
      cards.forEach(card => {
        card.style.transform = '';
        card.style.opacity = '';
        card.style.visibility = '';
        card.style.pointerEvents = '';
      });
    };
}

