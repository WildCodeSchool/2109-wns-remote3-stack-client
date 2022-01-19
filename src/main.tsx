import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { client } from '@api/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ToastContainer
          position="bottom-left"
          theme="dark"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
