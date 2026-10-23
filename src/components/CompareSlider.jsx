import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function CompareSlider({ comparison }) {
  const [position, setPosition] = useState(50);
  return (
    <article className="comparison-card">
      <div className="comparison-visual" style={{ '--split': `${position}%` }}>
        <img src={comparison.before} alt={`Antes: ${comparison.title.toLowerCase()}`} loading="lazy" decoding="async" fetchPriority="low" width="900" height="1200" />
        <img className="comparison-after" src={comparison.after} alt={`Después: ${comparison.title.toLowerCase()}`} loading="lazy" decoding="async" fetchPriority="low" width="900" height="1200" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
        <span className="comparison-pill comparison-pill--before">ANTES</span>
        <span className="comparison-pill comparison-pill--after">DESPUÉS</span>
        <span className="comparison-handle" style={{ left: `${position}%` }} aria-hidden="true"><MoveHorizontal size={19}/></span>
        <input type="range" min="0" max="100" value={position} onChange={(e)=>setPosition(Number(e.target.value))} aria-label={`Deslizar para comparar antes y después: ${comparison.title}`} className="comparison-range" />
      </div>
      <div className="comparison-content"><span className="eyebrow">CASO {comparison.id} · TRABAJO REAL</span><h3>{comparison.title}</h3><p>Mové el control para comparar el resultado.</p></div>
    </article>
  );
}
