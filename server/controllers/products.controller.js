import Products from '../models/products.model.js';

export const getProducts = async (req, res) => {
    const products = await Products.find({
        user: req.user.id
    }).populate('user')
    res.json(products);
}

export const createProduct = async (req, res) => {
    const { name, description, price, stock, category } = req.body;

    console.log(req.user);

    const newProduct = new Products({
        name,
        description,
        price,
        stock,
        category,           // Debes enviar este valor desde el frontend
        user: req.user.id   // Relacionamos el producto con el usuario autenticado
    })

    const savedProducts = await newProduct.save();
    res.json(savedProducts);
}

export const getProduct = async (req, res) => {
    const product = await Products.findById(req.params.id).populate('category');

    if (!product) return res.status(404).json({ message: "Producto no encontrada." })
    res.json(product)
}

export const deleteProduct = async (req, res) => {
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product) return res.status(404).json({ message: "Producto no encontrado." })
    return res.sendStatus(204);
}

export const updateProduct = async (req, res) => {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Hace que aparesca el nuevo dato no el antiguo
    });

    if (!product) return res.status(404).json({ message: "Producto no encontrado." });
    res.json(product)
}
