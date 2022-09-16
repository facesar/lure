import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.module.css';
// import './Main.scss';
import App from './App';

import { HashRouter } from 'react-router-dom';

// Store 
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
