import delay from '../../utils/delay';

class httpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);

    await delay(500);

    return response.json();
  }
}

export default httpClient;
