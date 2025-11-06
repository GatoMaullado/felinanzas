import React from 'react';
import Formulario from './components/Formulario';
import Background from './components/Background/Background'; 

function App() {
  return (
    <>
      {/* Fondo animado */}
      <Background />

      {/* Contenido principal */}
      <div style={{ minHeight: '100vh', padding: '20px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#fff' }}>
          Felinanzas 🐾
        </h1>
        <Formulario />
      </div>
    </>
  );
}

export default App;
