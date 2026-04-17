class PokemonController {
  constructor(pokemonService) {
    this.pokemonService = pokemonService;
  }

  getExternalData = async (req, res, next) => {
    try {
      const data = await this.pokemonService.getFirstSeasonPokemons();
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PokemonController;