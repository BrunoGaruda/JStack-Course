const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

// Middleware para ler requisições com body
app.use(express.json());
// Midware CORS, com isso irá acessar todas as rotas utilizando a política CORS
app.use(cors);
// Routes (Middleware)
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));
