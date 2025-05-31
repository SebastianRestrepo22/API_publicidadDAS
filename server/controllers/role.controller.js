import Role from '../models/role.model.js'

export const createRole = async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRole = async (req, res) => {
  const role = await Role.findById(req.params.id).populate('user');

  if (!role) return res.status(404).json({ message: "Rol no encontrada." })
  res.json(role);
}

export const deleteRole = async (req, res) => {
  const role = await Role.findByIdAndDelete(req.params.id);

  if (!role) return res.status(404).json({ message: "Rol no encontrada." })
  return res.sendStatus(204);
}
