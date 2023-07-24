import React from 'react';
import ReactDOM from 'react-dom';
import { RootStore } from '@root/store';
import App from './App';

const store = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
