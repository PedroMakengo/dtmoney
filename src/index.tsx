import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    transiction: Model
  },
  routes() {
    this.namespace = 'api';

    this.get('/transictions', () => {
      return this.schema.all('transiction');
    });

    this.post('/transictions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transiction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
