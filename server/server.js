require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Usuario = require('./models/Usuario'); // ✅ Usamos modelo externo

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/api/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).send('Usuario guardado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar usuario');
  }
});

app.get('/', (req, res) => {
  res.send('🚀 Backend de Felinanzas funcionando correctamente');
});

app.listen(5000, () => {
  console.log('Servidor backend corriendo en http://localhost:5000');
});
