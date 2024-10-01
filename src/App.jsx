import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '80px', marginRight: '20px' }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '80px' }} />
          </a>
        </div>
        <h1 style={{ fontSize: '3rem' }}>Hello World!</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>A simple static website for Cloud Computing Class.</p>
      </div>
    </>
  );
}

export default App
