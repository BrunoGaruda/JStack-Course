const ContactsRepository = require('../../repositories/ContactsRepository');
const isValidUUID = require('../utils/isValidUUID');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'Contact not Found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    // Nome é requerido para a validação
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category' });
    }

    if (email) {
      // Verificando se existe email cadastrado
      const contactsExist = await ContactsRepository.findByEmail(email);
      if (contactsExist) {
        return response.status(400).json({ error: 'This e-mail already exists' });
      }
    }

    // Criando
    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      // evitando de quebrar a aplicação colocando um null
      category_id: category_id || null,
    });

    return response.status(201).json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category' });
    }

    // nome
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactsRepository.findById(id);
    // id
    if (!contactExist) {
      // 404: not found
      return response.status(404).json({ error: 'Contact not Found' });
    }

    if (email) {
      // email
      const contactsByEmail = await ContactsRepository.findByEmail(email);
      if (contactsByEmail && contactsByEmail.id !== id) {
        return response.status(400).json({ error: 'This e-mail already exists' });
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    await ContactsRepository.delete(id);
    // 204: No Content
    return response.sendStatus(204);
  }
}
// Singleton
module.exports = new ContactController();
