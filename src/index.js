const fs = require('fs').promises;

const path = require('path');


const PokemonAPI = require('./PokemonAPI')

class Main {
  constructor(pokemonAPI) {
    this.pokemonDir = path.resolve('.', 'pokemons');
    this.pokemonAPI = pokemonAPI;

  }
  makePokemonDir = async () => {
    try {
      const stats = await fs.stat(this.pokemonDir);
      if (!stats.isDirectory()) {
        throw new Error(`${this.pokemonDir} is not a directory`);
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        // The directory does not exist, so we can create it
        await fs.mkdir(this.pokemonDir);
      } else {
        // Some other error occurred, so we'll just throw it
        throw err;
      }
    }
  };

  start = async () => {
    console.clear();
    await this.makePokemonDir();   

    try {
      const person = await this.pokemonAPI.getPerson();
      console.log(person);
    } catch (err) {
      console.error(err);
    }
  };
  makePokemonDir = async () => {
    try {
      await fs.mkdir(this.pokemonDir, { recursive: true });
    } catch (err) {
      throw err;
    }
  };
  
}

const pokemonAPI = new PokemonAPI();
const main = new Main(pokemonAPI);
main.start();
