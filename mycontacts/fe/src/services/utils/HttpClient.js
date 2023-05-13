import delay from '../../utils/delay';

class httpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseUrl}${path}`);

    // status 200 a 299
    if (response.ok) {
      return response.json();
    }

    throw new Error('Erro na API!');
  }
}

export default httpClient;
