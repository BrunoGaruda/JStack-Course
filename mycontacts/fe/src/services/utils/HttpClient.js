import delay from '../../utils/delay';
import APIerror from '../../errors/APIError';

class httpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path) {
    return this.makeRequest(path, { method: 'GET' });
  }

  post(path, body) {
    return this.makeRequest(
      path,
      {
        method: 'POST',
        body,
      },
    );
  }

  async makeRequest(path, options) {
    await delay(1500);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
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
