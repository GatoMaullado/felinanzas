import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: ''
  });

  const [estado, setEstado] = useState(''); // Nuevo: estado visual

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('Enviando...');
    try {
      const res = await fetch('http://localhost:5000/api/usuarios', {
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
        <button type="submit">Enviar</button>
      </form>
      {estado && <p className="estado">{estado}</p>}
    </div>
  );
};

export default Formulario;
