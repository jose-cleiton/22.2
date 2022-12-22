const https = require('https');

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    return new Promise((resolve, reject) => {
      https.get(`${this.baseURL}${endpoint}`, (res) => {
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

module.exports = API;
