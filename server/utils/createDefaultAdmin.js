// utils/createDefaultAdmin.js
import Role from '../models/role.model.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export async function createDefaultAdmin() {
  try {
    // 1. Verificar si ya existe el rol "admin"
    let adminRole = await Role.findOne({ name: "admin" });

    // 2. Si no existe, crear el rol
    if (!adminRole) {
      adminRole = new Role({ name: "admin" });
      await adminRole.save();
      console.log("Rol admin creado");
    }

    // 3. Verificar si ya existe un usuario admin
    const existingAdmin = await User.findOne({ email: "admin@example.com" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      const adminUser = new User({
        username: "admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: adminRole._id,
      });

      await adminUser.save();
      console.log("Usuario admin creado");
    } else {
      console.log("Ya existe un usuario admin");
    }
  } catch (error) {
    console.error("Error creando el admin:", error);
  }
}
