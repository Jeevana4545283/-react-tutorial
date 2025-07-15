import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; // ✅ Bootstrap styles

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
