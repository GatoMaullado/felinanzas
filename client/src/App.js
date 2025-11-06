import React from 'react';
import Formulario from './components/Formulario/Formulario';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar'; // 👈 Importa tu navbar

function App() {
  return (
    <>
      {/* Fondo animado */}
      <Background />

      {/* Contenido principal */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center'
        }}
      >
        <h1
          className="titulo-principal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
            color: '#ffffff',
            fontSize: '2.2rem',
            fontWeight: '600',
            letterSpacing: '0.8px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'Segoe UI, Roboto, sans-serif',
            textAlign: 'center',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>🐾</span>
          Felinanzas
          <span style={{ fontSize: '1.8rem' }}>🐾</span>
        </h1>
        <Formulario />
      </div>

      {/* Navbar flotante */}
      <Navbar />
    </>
  );
}

export default App;
