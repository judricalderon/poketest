const express = require('express');

function createPokemonRouter(pokemonController) {
  const router = express.Router();

  router.get('/', pokemonController.getExternalData);

  return router;
}

module.exports = createPokemonRouter;