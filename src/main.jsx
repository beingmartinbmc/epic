import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Register service worker for caching and offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Use the correct base path for the service worker
    const baseUrl = import.meta.env.BASE_URL || '/';
    const swPath = baseUrl + 'sw.js';
    console.log('Attempting to register service worker at:', swPath);
    
    navigator.serviceWorker.register(swPath)
      .then((registration) => {
        console.log('SW registered successfully: ', registration);
      })
      .catch((registrationError) => {
        console.error('SW registration failed: ', registrationError);
        console.log('Base URL:', baseUrl);
        console.log('SW Path:', swPath);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 