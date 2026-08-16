import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

function cleanupStaleServiceWorkers() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

function cleanupStaleCaches() {
  if (!('caches' in window)) return;

  caches.keys().then((keys) => {
    keys
      .filter((key) => key.includes('workbox') || key.includes('precache') || key.includes('A-Calendar'))
      .forEach((key) => caches.delete(key));
  });
}

cleanupStaleServiceWorkers();
cleanupStaleCaches();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
