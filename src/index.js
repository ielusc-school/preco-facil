import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // adicionei o import
import { Provider } from 'react-redux'; // adicionei o import
import App from './App';

// adicionando nosso arquivo reducers
import Reducers from './Reducers';

// criando nossa store
const store = createStore(Reducers);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);


