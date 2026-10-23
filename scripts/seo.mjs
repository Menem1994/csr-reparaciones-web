// Solo crea canonical, sitemap y URLs sociales cuando VITE_SITE_URL es una URL REAL.
import { readFile, writeFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
const env=loadEnv('production',process.cwd(),'VITE_');
const raw=(env.VITE_SITE_URL || '').trim().replace(/\/+$/,'');
const valid=/^https:\/\/[^/]+(?:\/[^?#]*)?$/.test(raw);
const root=new URL('../dist/',import.meta.url);
let html=await readFile(new URL('index.html',root),'utf8');
const business={
  '@context':'https://schema.org','@type':'LocalBusiness',name:'CSR Reparaciones',
  description:'Servicio técnico de lavarropas, microondas, ventiladores y electrodomésticos en San Nicolás de los Arroyos.',
  telephone:'+54 336 420-3677',email:'saidrochaa@outlook.com',
  address:{'@type':'PostalAddress',addressLocality:'San Nicolás de los Arroyos',addressRegion:'Buenos Aires',addressCountry:'AR'},
  areaServed:{'@type':'City',name:'San Nicolás de los Arroyos'},
  sameAs:['https://www.instagram.com/csr_reparaciones/','https://www.facebook.com/profile.php?id=61583969757785'],
  hasOfferCatalog:{'@type':'OfferCatalog',name:'Servicios técnicos',itemListElement:['Reparación de lavarropas','Reparación de microondas','Reparación de ventiladores'].map(name=>({'@type':'OfferCatalog',name}))}
};
if(valid){
  business.url=raw+'/'; business.image=raw+'/images/lavarropas-samsung-reparacion.webp';
  html=html.replace('</head>',`<link rel="canonical" href="${raw}/" />\n<meta property="og:url" content="${raw}/" />\n</head>`);
  html=html.replace('property="og:image" content="/images/',`property="og:image" content="${raw}/images/`)
    .replace('name="twitter:image" content="/images/',`name="twitter:image" content="${raw}/images/`);
  await writeFile(new URL('sitemap.xml',root),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${raw}/</loc></url><url><loc>${raw}/privacidad.html</loc></url></urlset>\n`);
  await writeFile(new URL('robots.txt',root),`User-agent: *\nAllow: /\nSitemap: ${raw}/sitemap.xml\n`);
  console.log('✓ Canonical, Open Graph y sitemap creados para',raw);
} else { console.log('ℹ VITE_SITE_URL aún no definido: canonical y sitemap se activarán al publicar en tu URL real.'); }
html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify(business).replace(/</g,'\\u003c')}</script>\n</head>`);
await writeFile(new URL('index.html',root),html);
