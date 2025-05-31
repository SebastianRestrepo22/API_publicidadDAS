import Service from '../models/service.model.js';

export const createService = async (req, res) => {
    const { name, description, price, category } = req.body;

    console.log(req.user);

    const newService = new Service({
        name,
        description,
        price,
        category,
        user: req.user.id
    })

    const savedServices = await newService.save();
    res.json(savedServices);
}

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getService = async (req, res) => {
    const service = await Service.findById(req.params.id).populate('user');

    if (!service) return res.status(404).json({ message: "Servcio no encontrada." })
    res.json(service);
}

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Servicio eliminado" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateService = async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Esto es para que nos devuelva el dato actualizado y no el viejo
    });

    if (!service) return res.status(404).json({ message: "Categoria no encontrada." });
    res.json(service)
};
