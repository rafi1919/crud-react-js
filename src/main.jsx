import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Presentation/Routers/router';
import './index.css';
import store from '../src/Presentation/Domain/redux/app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
