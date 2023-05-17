import delay from '../../utils/delay';
import APIerror from '../../errors/APIError';

class httpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseUrl}${path}`);

    let body = null;
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    // status ok de 200 a 299
    if (response.ok) {
      return body;
    }

    throw new APIerror(response, body);
  }
}

export default httpClient;
