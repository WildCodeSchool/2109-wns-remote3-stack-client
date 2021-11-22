import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './store';
import { client } from './API/client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
