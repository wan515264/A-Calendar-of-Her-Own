import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import { registerSW } from 'virtual:pwa-register';

const appBasePath = import.meta.env.BASE_URL;

function cleanupStaleServiceWorkers() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      const scopePath = new URL(registration.scope).pathname;

      if (!scopePath.startsWith(appBasePath)) {
        registration.unregister();
      }
    });
  });
}

if (import.meta.env.PROD) {
  cleanupStaleServiceWorkers();
  registerSW({ immediate: true });
} else if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });

  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    });
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={appBasePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
