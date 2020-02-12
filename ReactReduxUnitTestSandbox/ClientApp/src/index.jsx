import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { App } from './app';
import registerServiceWorker from './registerServiceWorker';
import { loadTodos } from './todos';

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore();

store.dispatch(loadTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
