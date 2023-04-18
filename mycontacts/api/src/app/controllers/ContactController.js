const ContactsRepository = require('../../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll(orderBy);

    // Wildcard -> Curinga ('*')
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'Not Found' });
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

    // Verificando se existe email cadastrado
    const contactsExist = await ContactsRepository.findByEmail(email);

    if (contactsExist) {
      return response.status(400).json({ error: 'This e-mail already exists' });
    }

    // Criando
    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactsRepository.findById(id);
    // id
    if (!contactExist) {
      // 404: not found
      return response.status(404).json({ error: 'User not Found' });
    }

    // nome
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    // email
    const contactsByEmail = await ContactsRepository.findByEmail(email);
    if (contactsByEmail && contactsByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail already exists' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await ContactsRepository.delete(id);
    // 204: No Content
    return response.sendStatus(204);
  }
}
// Singleton
module.exports = new ContactController();
