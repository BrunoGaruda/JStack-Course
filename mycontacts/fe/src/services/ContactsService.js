import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    // Criando o parse das requisições no formato JS
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);
    await delay(500);

    return response.json();
  }
}

export default new ContactsService();
