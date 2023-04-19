const express = require('express');

const routes = require('./routes');

const app = express();

// // Middlewares
// app.use((request, response) => {
// // Middleware 1
//   request.appId = 'MeuAppID';
//   response.send('Interceptado pelo Middleware');
// });

// Middleware para ler requisições com body
app.use(express.json());

// Midware CORS
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// Routes (Middleware)
app.use(routes);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3000'));
