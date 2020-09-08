import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../assets/css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.tsx')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}
