import delay from '../../utils/delay';
import APIerror from '../../errors/APIError';

class httpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(1500);

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

  async post(path, body) {
    await delay(1500);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    // status ok de 200 a 299
    if (response.ok) {
      return responseBody;
    }

    throw new APIerror(response, responseBody);
  }
}

export default httpClient;
