const CategoriesRepository = require('../../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    return response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      // 404: not found
      return response.status(404).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }
}

module.exports = new CategoryController();
