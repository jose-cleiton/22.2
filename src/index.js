const API = require('./API');
const api = new API('https://pokeapi.co/api/v2/');

const pokemonsImag = async (nome) => {
  const resul = await api.get(`pokemon/${nome}`);

  const { sprites } = resul;
 
 
  const pkm = sprites
  
  const result = {};

// Adicione os valores de "master" ao objeto final
result.master = Object.values(sprites).filter(value => value !== null);

// Adicione os valores de "other" ao objeto final
result.other = [];
for (const key in sprites.other) {
  const value = sprites.other[key];
  result.other = result.other.concat(Object.values(value).filter(val => val !== null));
}

// Adicione os valores de "type" ao objeto final
result.type = [];
for (const key in sprites.type) {
  const value = sprites.type[key];
  result.type = result.type.concat(Object.values(value).filter(val => val !== null));
}

// Remova "versions" do objeto final
delete sprites.versions;

// Adicione o restante do objeto "sprites" ao objeto final
Object.assign(result, sprites);

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
