const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  correo: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
