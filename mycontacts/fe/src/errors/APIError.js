export default class APIerror extends Error {
  constructor(response, body) {
    super();

    this.name = 'APIerror';
    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
