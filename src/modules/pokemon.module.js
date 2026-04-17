const PokeApiClient = require('../services/client');
const PokemonMapper = require('../services/pokemon.mapper');
const PokemonService = require('../services/pokemon.service');
const PokemonController = require('../controllers/pokemon.controller');
const createPokemonRouter = require('../routes/pokemon.routes');

const pokeApiClient = new PokeApiClient();
const pokemonMapper = new PokemonMapper();
const pokemonService = new PokemonService(pokeApiClient, pokemonMapper);
const pokemonController = new PokemonController(pokemonService);

const router = createPokemonRouter(pokemonController);

module.exports = {
  router
};