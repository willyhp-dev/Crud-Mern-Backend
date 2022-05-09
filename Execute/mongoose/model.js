const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field nama Harus ada "],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    maxlength: 1000000,
  },
  stock: Number,
  status: {
    type: String,
    },
    image_url: {
        type: String,
  }
});
const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;