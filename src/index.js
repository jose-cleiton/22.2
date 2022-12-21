const fs = require('fs').promises;

const path = require('path');
const pokemonDir = path.resolve('.', 'pokemons');


const https = require('https');

class PokemonAPI {
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
  }

  async getPerson() {
    return new Promise((resolve, reject) => {
      https.get(this.url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', (e) => {
        reject(e);
      });
    });
  }
}

class Main {
  makePokemonDir = async () => {
    try {
      const stats = await fs.stat(pokemonDir);
      if (!stats.isDirectory()) {
        throw new Error(`${pokemonDir} is not a directory`);
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        // The directory does not exist, so we can create it
        await fs.mkdir(pokemonDir);
      } else {
        // Some other error occurred, so we'll just throw it
        throw err;
      }
    }
  };
  
  start = async () => {
    console.clear();
    await this.makePokemonDir();


    const starWarsAPI = new PokemonAPI();

    try {
      const person = await starWarsAPI.getPerson();
      console.log(person);
    } catch (err) {
      console.error(err);
    }
    
  };
  makePokemonDir = async () => {
    try {
      const stats = await fs.stat(pokemonDir);
      if (!stats.isDirectory()) {
        throw new Error(`${pokemonDir} is not a directory`);
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        // The directory does not exist, so we can create it
        await fs.mkdir(pokemonDir);
      } else {
        // Some other error occurred, so we'll just throw it
        throw err;
      }
    }
  };
  
}

const main = new Main();
main.start();
