import React, { useId } from 'react';

// Ilustraciones SVG propias; no requieren descargar modelos 3D externos.
export default function ApplianceGraphic({ type = 'lavarropas', className = '' }) {
  // IDs únicos: evita que los gradientes de varias ilustraciones SVG se interfieran.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const grad = (name) => `${name}-${uid}`;
  if (type === 'microondas') return (
    <svg viewBox="0 0 440 420" role="img" aria-label="Ilustración de microondas" className={className}>
      <defs>
        <linearGradient id={grad("microBody")} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#e8f5f4"/><stop offset="1" stopColor="#6c8e9b"/></linearGradient>
        <linearGradient id={grad("microGlass")} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#214955"/><stop offset="1" stopColor="#091722"/></linearGradient>
      </defs>
      <ellipse cx="222" cy="354" rx="178" ry="20" fill="#071a20" opacity=".4"/>
      <g transform="translate(24 92)">
        <rect x="18" y="46" rx="28" width="382" height="238" fill="#223a45" />
        <rect x="12" y="20" rx="27" width="382" height="238" fill={`url(#${grad("microBody")})`} stroke="#fff" strokeOpacity=".55" strokeWidth="3"/>
        <rect x="34" y="43" rx="14" width="257" height="192" fill="#15313d"/>
        <rect x="45" y="54" rx="9" width="234" height="170" fill={`url(#${grad("microGlass")})`} stroke="#5e818a" strokeWidth="2"/>
        <path d="M60 66 172 66 73 216" fill="#8cdacf" opacity=".1"/><path d="M182 66 252 66 153 215 98 215" fill="#93f1df" opacity=".08"/>
        <rect x="312" y="54" width="59" height="36" rx="7" fill="#0c2730"/><text x="342" y="78" fontSize="19" fontFamily="monospace" textAnchor="middle" fill="#42f3c8">12:00</text>
        {[0,1,2].map(r=>[0,1].map(c=><rect key={`${r}${c}`} x={316+c*30} y={112+r*32} width="22" height="20" rx="5" fill="#42636c" stroke="#ecfffb" strokeOpacity=".2"/>))}
        <rect x="318" y="213" width="53" height="13" rx="6.5" fill="#24d9bb"/>
        <rect x="53" y="258" width="25" height="14" rx="3" fill="#263c44"/><rect x="334" y="258" width="25" height="14" rx="3" fill="#263c44"/>
      </g>
    </svg>
  );
  if (type === 'ventiladores') return (
    <svg viewBox="0 0 440 420" role="img" aria-label="Ilustración de ventilador" className={className}>
      <defs><linearGradient id={grad("fanGrad")} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ddfaf2"/><stop offset="1" stopColor="#568895"/></linearGradient></defs>
      <ellipse cx="220" cy="386" rx="125" ry="15" fill="#03151b" opacity=".45"/>
      <path d="M215 247h15v117h-15z" fill="#71939b"/><path d="M175 366h93l35 13H138z" fill={`url(#${grad("fanGrad")})`} stroke="#c1f8ef" strokeWidth="3"/>
      <circle cx="222" cy="158" r="135" fill="#0e303b" stroke="#5cb1b5" strokeWidth="12"/>
      <circle cx="222" cy="158" r="124" fill="none" stroke="#bcece8" strokeWidth="3"/>
      <g className="fan-blades" style={{transformOrigin:'222px 158px'}}>
        {[0,90,180,270].map(a=><path key={a} d="M221 156C182 117 191 58 216 50 262 39 251 114 221 156Z" fill="#b3ece0" stroke="#dbfff7" strokeWidth="2" transform={`rotate(${a} 222 158)`}/>)}
      </g>
      {/* Rejilla simétrica: radios distribuidos en 360°, sin líneas sueltas atravesando las aspas. */}
      <g stroke="#d6fffa" strokeOpacity=".34" fill="none" strokeWidth="1.6">
        {Array.from({ length: 18 }, (_, i) => i * 20).map(a=><line key={a} x1="222" y1="40" x2="222" y2="132" transform={`rotate(${a} 222 158)`}/>)}
      </g>
      {[58,83,108].map(r=><circle key={r} cx="222" cy="158" r={r} fill="none" stroke="#c7f5ef" strokeOpacity=".32" strokeWidth="1.8"/>)}
      <circle cx="222" cy="158" r="116" fill="none" stroke="#c7f5ef" strokeOpacity=".7" strokeWidth="3"/>
      <circle cx="222" cy="158" r="20" fill="#133e49" stroke="#7af6db" strokeWidth="5"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 440 460" role="img" aria-label="Ilustración de lavarropas automático" className={className}>
      <defs>
        <linearGradient id={grad("washBody")} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f5ffff"/><stop offset=".48" stopColor="#a8d3d5"/><stop offset="1" stopColor="#5d8995"/></linearGradient>
        <radialGradient id={grad("washDrum")}><stop stopColor="#5cfbd4"/><stop offset=".5" stopColor="#1a7b92"/><stop offset="1" stopColor="#0b2638"/></radialGradient>
      </defs>
      <ellipse cx="220" cy="428" rx="160" ry="17" fill="#03151b" opacity=".5"/>
      <g transform="translate(62 18)">
        <rect x="19" y="30" width="306" height="384" rx="31" fill="#264956" opacity=".85" />
        <rect x="0" y="0" width="306" height="392" rx="27" fill={`url(#${grad("washBody")})`} stroke="#e6ffff" strokeOpacity=".72" strokeWidth="4"/>
        <path d="M12 89h283" stroke="#5d848d" strokeWidth="4"/>
        <rect x="18" y="17" rx="8" width="146" height="52" fill="#d8f8f4" opacity=".85"/>
        <rect x="29" y="24" rx="4" width="94" height="35" fill="#0c3440"/>
        <text x="75" y="47" fill="#4cf2ca" fontFamily="monospace" fontSize="19" textAnchor="middle">01:20</text>
        <circle cx="243" cy="44" r="21" fill="#284f5a" stroke="#d4ffff" strokeWidth="5"/>
        <circle cx="243" cy="44" r="7" fill="#41f4c8"/>
        <circle cx="153" cy="228" r="134" fill="#102e3f" stroke="#d4faf7" strokeWidth="13"/>
        <circle cx="153" cy="228" r="113" fill="#234b60" stroke="#728f9d" strokeWidth="8"/>
        <circle cx="153" cy="228" r="97" fill={`url(#${grad("washDrum")})`}/>
        <path d="M81 257c31-59 55-4 82-20s55-42 90-12v86H71z" fill="#30c5d2" opacity=".28"/>
        <path d="M77 215q26-63 78-48t74-24" stroke="#b5fff0" strokeWidth="12" strokeLinecap="round" opacity=".35" fill="none"/>
        <circle cx="153" cy="228" r="93" fill="none" stroke="#8df8e8" strokeWidth="2" strokeDasharray="4 14" opacity=".35"/>
        <rect x="22" y="367" width="262" height="8" rx="4" fill="#608690" />
        <rect x="25" y="392" width="29" height="16" rx="4" fill="#294852"/><rect x="249" y="392" width="29" height="16" rx="4" fill="#294852"/>
      </g>
    </svg>
  );
}
