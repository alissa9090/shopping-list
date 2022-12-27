import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../assets/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then((reg) => {
//           console.log('Service worker registered.', reg);
//         }, console.log);
//   });
// }
