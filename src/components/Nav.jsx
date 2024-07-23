import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
         <nav className="nav">
            <Link to='/home'>Inicio</Link>
            <Link to='/favoritos'>Favoritos</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/carrito'>Carrito</Link>

         </nav>
   
  )
}

export default Nav
