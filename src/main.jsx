import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const container = document.getElementById('root');
// El HTML ya contiene la página pregenerada para SEO. React la vuelve interactiva.
if (container.hasChildNodes()) hydrateRoot(container, <App />);
else createRoot(container).render(<App />);
