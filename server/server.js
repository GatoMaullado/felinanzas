require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Usuario = require('./models/Usuario'); // ✅ Modelo externo

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

// 🌐 Servir frontend desde carpeta /frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// 🏠 Ruta raíz (útil si usas HTML directo)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// 🐾 Ruta para guardar usuarios
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

// 🧭 Catch-all para rutas desconocidas (React SPA compatible con Node.js v22)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// 🚀 Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
