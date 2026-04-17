const PokemonEntity = require('../types/pokemon.entity');

class PokemonMapper {
  map(pokemonData) {
    const stats = {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0
    };

    for (const item of pokemonData.stats) {
      const statName = item.stat.name;
      const value = item.base_stat;

      if (statName === 'hp') stats.hp = value;
      if (statName === 'attack') stats.attack = value;
      if (statName === 'defense') stats.defense = value;
      if (statName === 'special-attack') stats.specialAttack = value;
      if (statName === 'special-defense') stats.specialDefense = value;
      if (statName === 'speed') stats.speed = value;
    }

    const total =
      stats.hp +
      stats.attack +
      stats.defense +
      stats.specialAttack +
      stats.specialDefense +
      stats.speed;

    return new PokemonEntity({
      id: pokemonData.id,
      name: pokemonData.name,
      displayName: this.capitalize(pokemonData.name),
      types: pokemonData.types.map(t => t.type.name),
      abilities: pokemonData.abilities.map(a => ({
        name: a.ability.name,
        isHidden: a.is_hidden
      })),
      stats: {
        ...stats,
        total
      },
      physical: {
        heightMeters: pokemonData.height / 10,
        weightKg: pokemonData.weight / 10
      },
      sprite: pokemonData.sprites.other?.['official-artwork']?.front_default || null
    });
  }

  capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

module.exports = PokemonMapper;