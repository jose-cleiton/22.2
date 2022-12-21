const https = require('https');
class PokemonAPI {
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    
  }

  async getPerson() {
    return new Promise((resolve, reject) => {
      https
        .get(this.url, (res) => {
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
        })
        .on('error', (e) => {
          reject(e);
        });
    });
  }
}

module.exports = PokemonAPI;