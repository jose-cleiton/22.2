const API = require('./API');
const api = new API('https://pokeapi.co/api/v2/');

const pokemonsImag = async (nome) => {
  const resul = await api.get(`pokemon/${nome}`);

  const { sprites } = resul;
 
 
  const pkm = sprites
  
  const result = {};

  // Inicialize o array "master"
  result.master = [];
  
  // Itera sobre as chaves do objeto "sprites"
  for (const key in sprites) {
    const value = sprites[key];
    
    // Se o valor não for nulo, adicione-o ao array "master"
    if (value !== null) {
      result.master.push(value);
    }
  }
  
  // Inicialize o array "other"
  result.other = [];
  
  // Itera sobre o objeto "other"
  for (const key in sprites.other) {
    const value = sprites.other[key];
    
    // Adicione as URLs do objeto "value" ao array "other"
    result.other = result.other.concat(Object.values(value).filter(val => val !== null));
  }
  
  // Inicialize o objeto "type"
  result.type = {};
  
  // Itera sobre as chaves do objeto "sprites"
  for (const key in sprites) {
    const value = sprites[key];
    
    // Se o valor não for nulo, a chave ainda não estiver presente no objeto final e não for "versions", adicione-o ao objeto "type"
    if (value !== null && !result.hasOwnProperty(key) && key !== "versions") {
      result.type[key] = value;
    }
  }
  
  console.log(result);
  


 
}
pokemonsImag('bulbasaur');

// class Main {
//   constructor(pokemonAPI) {
//     this.pokemonDir = path.resolve('.', 'pokemons');
//     this.pokemonAPI = pokemonAPI;
//   }
//   makePokemonDir = async () => {
//     try {
//       const stats = fs.stat(this.pokemonDir);
//       if (!stats.isDirectory()) {
//         throw new Error(`${this.pokemonDir} is not a directory`);
//       }
//     } catch (err) {
//       if (err.code === 'ENOENT') {
//         // The directory does not exist, so we can create it
//         await fs.mkdir(this.pokemonDir);
//       } else {
//         // Some other error occurred, so we'll just throw it
//         throw err;
//       }
//     }
//   };

//   start = async () => {
//     console.clear();
//     await this.makePokemonDir();

//     try {
//       const { results } = await this.pokemonAPI.fatchApi();
//       const itemPokemons = results.map((item) => item.url);

//       const itemPokemon = itemPokemons[0];
//       const pokemon = await this.pokemonAPI.fatchApi(itemPokemon);

//       await this.pokemonAPI.fatchPokemonImage(pokemon);

//     } catch (err) {
//       console.error(err);
//     }
//   };
//   makePokemonDir = () => {
//     fs.mkdirSync(this.pokemonDir, { recursive: true });
//   };
// }

// const main = new Main(new PokemonAPI());
// main.start();
