// app/page.jsx
'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Aquí puedes meter el contenido de tu archivo menu.js si es necesario
    document.getElementById('logout')?.addEventListener('click', () => {
      alert('Cerrando sesión...') // Puedes reemplazarlo con lógica real
    })
  }, [])

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="user-info">
          <h3>Usuario: <span id="username">TuNombreUsuario</span></h3>
          <h4>Email: <span id="email">tucorreo@utsalamanca.com</span></h4>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="/vermapa">Ver Mapa</a></li>
            <li><a href="/lugaresconocer">Lugares por Conocer</a></li>
            <li><a href="/pasillos">Pasillos</a></li>
            <li><a href="/docentes">Docentes</a></li>
            <li><a href="#">Saber más acerca de</a></li>
          </ul>
        </nav>
        <button id="logout" className="logout-button">Cerrar Sesión</button>
      </aside>
      <main>
        <div className="welcome-section">
          <h1>¡Bienvenido a la Universidad!</h1>
          <p>Explora nuestro campus y descubre todos los recursos que tenemos para ti.</p>
          <div className="welcome-image">
            <img src="/img/universidad.jpg" alt="Bienvenido al GPS de la Universidad" />
          </div>
        </div>
      </main>
    </div>
  )
}
