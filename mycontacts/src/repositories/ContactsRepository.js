const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Bruno',
    email: 'bruleorn@gmail.com',
    phone: '84988637837',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Bruna lima',
    email: 'brunalima@gmail.com',
    phone: '84988998899',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();
