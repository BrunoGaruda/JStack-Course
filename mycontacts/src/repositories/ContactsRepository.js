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

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
