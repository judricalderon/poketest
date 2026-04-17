const express = require('express');
const pokemonModule = require('./modules/pokemon.module');
const errorMiddleware = require('./middlewares/middleware');

const app = express();

app.use(express.json());

app.use('/external-data', pokemonModule.router);

app.use(errorMiddleware);

module.exports = app;