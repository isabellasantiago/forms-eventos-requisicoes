import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primeflex/primeflex.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
