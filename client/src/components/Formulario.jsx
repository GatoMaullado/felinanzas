import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: ''
  });

  const [estado, setEstado] = useState('');
  const [enviando, setEnviando] = useState(false); // Nuevo: controla el botón

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('Enviando...');
    setEnviando(true);
    try {
      const res = await fetch('https://stunning-space-acorn-xgj6p7rgg47hvgjw-5000.app.github.dev/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setEstado('¡Registro exitoso! 🐾');
        setFormData({ nombre: '', telefono: '', correo: '' });
      } else {
        setEstado('Error al registrar 😿');
      }
    } catch (err) {
      console.error(err);
      setEstado('Error de conexión con el servidor 🛠️');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="formulario-container">
      <h2>Regístrate para recibir consejos felinos 💸🐱</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {estado && <p className="estado">{estado}</p>}
    </div>
  );
};

export default Formulario;
