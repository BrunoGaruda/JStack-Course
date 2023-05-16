export default class APIerror extends Error {
  constructor(message, response) {
    super(message);

    this.name = 'APIerror';
    this.response = response;
  }

  getContentType() {
    return this.response.headers.get('Content-Type');
  }
}
