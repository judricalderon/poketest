class PokemonEntity {
  constructor({
    id,
    name,
    displayName,
    types,
    abilities,
    stats,
    physical,
    sprite
  }) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
    this.physical = physical;
    this.sprite = sprite;
  }
}

module.exports = PokemonEntity;