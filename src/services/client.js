const axios = require('axios');

class PokeApiClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
      timeout: 10000
    });
  }

  async getFirstSeasonPokemons() {
    const response = await this.httpClient.get('/pokemon?limit=10&offset=0');
    return response.data.results;
  }

  async getPokemonByUrl(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

module.exports = PokeApiClient;