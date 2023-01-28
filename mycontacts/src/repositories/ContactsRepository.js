const { v4 } = require('uuid');

const db = require('../database');

let contacts = [
  {
    id: v4(),
    name: 'Bruno',
    email: 'bruleorn@gmail.com',
    phone: '84988637837',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Melissa',
    email: 'cussyane@gmail.com',
    phone: '84988996969',
    category_id: v4(),
  },
];

// SELECT para pegar linha(s) do data, * para listar todas. FROM para localizar
// WHERE(onde), quando o valor será igual ao bind ex: id = $1

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    // Corrigindo o erro do SQL injection
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    // Aplicando ordem crescente ou descrente com /contacts?orderBy=asc | desc
    const rows = await db.query(`SELECT * FROM contacts ORDER by name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
