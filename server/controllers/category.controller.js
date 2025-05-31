import Category from '../models/category.model.js';

export const getCategories = async (req, res) => {
    const categories = await Category.find({
        user: req.user.id
    }).populate('user') //Es para que triga todos sus datos y los imprima
    res.json(categories);
}

export const createCategory = async (req, res) => {
    const { name, description } = req.body;

    console.log(req.user);

    const newCategory = new Category({
        name,
        description,
        user: req.user.id
    })

    const savedCategories = await newCategory.save();
    res.json(savedCategories);
}

export const getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).populate('user');

    if (!category) return res.status(404).json({ message: "Categoria no encontrada." })
    res.json(category);
}

export const deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) return res.status(404).json({ message: "Categoria no encontrada." })
    return res.sendStatus(204);
}

export const updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Esto es para que nos devuelva el dato actualizado y no el viejo
    });

    if (!category) return res.status(404).json({ message: "Categoria no encontrada." });
    res.json(category)
};