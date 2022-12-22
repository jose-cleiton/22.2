const Pokemon = require('./Pokemon')
const API = require('./Api')

class Main {
  constructor() {
    this.pokemonAPI = new API('https://pokeapi.co/api/v2/');
    this.pokemon = new Pokemon(this.pokemonAPI);
  }

  async start() {
    console.clear();
    await this.pokemon.pokemonsImag('bulbasaur');
  }
}

const main = new Main();
main.start();