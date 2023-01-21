const ContactsRepository = require('../../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

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

    // Nome é requirido para a validação
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

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'Not Found' });
    }

    await ContactsRepository.delete(id);
    // 204: No Content
    return response.sendStatus(204);
  }
}
// Singleton
module.exports = new ContactController();
