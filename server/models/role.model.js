import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // relación con el usuario que creó el producto
    required: true
  }
});

export default mongoose.model('Role', RoleSchema);
