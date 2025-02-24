const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;