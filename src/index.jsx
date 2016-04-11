import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { GOOGLE_MAPS_APIKEY } from '../config/secrets.json';

import App from './components/app';
import reducers from './reducers';

// Hook in middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

let scriptApi = document.createElement('script');
scriptApi.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_APIKEY}`);
scriptApi.setAttribute('defer', '');
scriptApi.setAttribute('async', '');
document.querySelector('head').appendChild(scriptApi);
