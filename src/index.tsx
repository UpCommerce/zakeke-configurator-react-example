import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { ZakekeEnvironment, ZakekeProvider } from 'zakeke-configurator-react';


const zakekeEnvironment = new ZakekeEnvironment();
ReactDOM.render(
  <React.StrictMode>
    <ZakekeProvider environment={zakekeEnvironment}>
      <App />
    </ZakekeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


