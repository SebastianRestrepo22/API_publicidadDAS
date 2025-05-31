import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // relación con la categoría
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // relación con el usuario que creó el producto
        required: true
    }
})

export default mongoose.model("Products", productSchema)