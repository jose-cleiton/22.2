
class Pokemon {
  constructor(api) {
    this.api = api;
  }

  async pokemonsImag(nome) {
    const resul = await this.api.get(`pokemon/${nome}`);
    const { sprites } = resul;
    const result = {};

    result.master = [];
    for (const key in sprites) {
      const value = sprites[key];
      if (value !== null && typeof value !== 'object') {
        result.master.push(value);
      }
    }

    result.other = [];
    for (const key in sprites.other) {
      const value = sprites.other[key];
      result.other = result.other.concat(Object.values(value).filter(val => val !== null));
    }

    result.type = [];
    for (const key in sprites) {
      const value = sprites[key];
      if (value !== null && typeof value !== 'object' && key !== 'versions') {
        result.type.push(value);
      }
    }

    console.log(result);
  }
}

module.exports = Pokemon;
