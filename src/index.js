import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
// Nous allons utiliser le composant Provider pour mettre à disposition notre store sur l'ensemble de l'application
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Création du store via Redux
const store = createStore(
  rootReducer,
  // Ligne suivante indispensable pour voir apparaitre votre store dans l'extension Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
