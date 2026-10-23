// Renderiza React a HTML durante el build para que buscadores y redes lean el contenido.
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { readFile, writeFile } from 'node:fs/promises';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel:'error' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const markup = renderToString(React.createElement(App));
  const htmlPath = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(htmlPath, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('No se encontró #root en dist/index.html');
  await writeFile(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`), 'utf8');
  console.log('✓ HTML de React pregenerado para SEO.');
} finally { await server.close(); }
