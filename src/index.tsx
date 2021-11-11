import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';


createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({ 
      transactions: [
        {
          id: 1,
          title: 'Freelancer com Thiago',
          type: 'deposit',
          category: 'Job',
          amount: 6000,
          createdAt: new Date('2021-11-11 09:00:00'),
        },
        {
          id: 2,
          title: 'Carro',
          type: 'withdraw',
          category: 'Luxo',
          amount: 2000,
          createdAt: new Date('2021-11-11 09:00:00'),
        },
        {
          id: 3,
          title: 'Freelancer com Júlio',
          type: 'deposit',
          category: 'Job',
          amount: 10000,
          createdAt: new Date('2021-10-11 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => { 
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
