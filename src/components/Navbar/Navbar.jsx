import React from 'react'
import '../Navbar/Navbar.css'

function Navbar(props) {
  return (
    <nav className="nav">
      <a href="/" className="logo">MJ</a>
      <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
      </ul>
      <div></div>
    </nav>
  )
}

export default Navbar
