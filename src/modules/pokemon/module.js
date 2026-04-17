const PokeApiClient = require('../../clients/client');
const PokemonMapper = require('./mapper');
const PokemonService = require('./service');
const PokemonController = require('./controller');
const createPokemonRouter = require('./routes');

const pokeApiClient = new PokeApiClient();
const pokemonMapper = new PokemonMapper();
const pokemonService = new PokemonService(pokeApiClient, pokemonMapper);
const pokemonController = new PokemonController(pokemonService);

const router = createPokemonRouter(pokemonController);

module.exports = {
  router
};