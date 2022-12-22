const axios = require('axios');


class API {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      headers: {
        'User-Agent': 'Meu-aplicativo/1.0.0',
      },
    });
  }

  async get(endpoint) {
    try {
      const response = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      if (error.response) {
        // A resposta do servidor indica um erro
        const { status, statusText } = error.response;
        throw new Error(`${status} ${statusText}`);
      } else {
        // Ocorreu um erro na requisição (por exemplo, timeout)
        throw error;
      }
    }
  }
}

module.exports = API;


module.exports = ApiAxios;

