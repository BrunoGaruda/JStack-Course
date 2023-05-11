import delay from '../../utils/delay';

class HttpClient {
  async get(path) {
    const response = await fetch(`http://localhost:3001${path}`);

    await delay(500);

    return response.json();
  }
}

export default new HttpClient();
