class PokemonService {
  constructor(pokeApiClient, pokemonMapper) {
    this.pokeApiClient = pokeApiClient;
    this.pokemonMapper = pokemonMapper;
  }

  async getFirstSeasonPokemons() {
    const pokemonList = await this.pokeApiClient.getFirstSeasonPokemons();

    const detailedPokemons = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonData = await this.pokeApiClient.getPokemonByUrl(pokemon.url);
        return this.pokemonMapper.map(pokemonData);
      })
    );

    return detailedPokemons;
  }
}

module.exports = PokemonService;