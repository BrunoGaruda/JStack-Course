export default class APIerror extends Error {
  constructor(message) {
    super(message);

    this.name = 'APIerror';
  }
}
