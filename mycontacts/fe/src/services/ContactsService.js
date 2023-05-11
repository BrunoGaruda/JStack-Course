import HttpClient from './utils/HttpClient';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    return HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contacts) {
    return HttpClient.post('/contacts', contacts);
  }
}

export default new ContactsService();
