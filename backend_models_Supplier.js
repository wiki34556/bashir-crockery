const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String },
  transactionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
});

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;