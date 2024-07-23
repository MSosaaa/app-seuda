import React from 'react'
import Products from '../components/Products'


const Productos = (producto) => {

   const {name, description, color, material, image, categoria} = producto 

  const agregarCarrito = (e) => {
    e.preventDefault()
  }

  const eliminarCarrito = (e) => {
    e.preventDefault()
  }

  const agregarFavoritos = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
           <h5 className="card-title">{name}</h5>
           <p className="card-text">{description}</p>
           <p className='card-color'>{color}</p>
           <p className='card-material'>{material}</p>
           <p className='card-categoria'>{categoria}</p>
           <a href="#" className="btn btn-primary" onClick={agregarCarrito}>Agregar</a> 
           <a href="#" className='btn btn-danger' onClick={eliminarCarrito}>Eliminar</a>
           <i className="bi bi-heart" onClick={agregarFavoritos}></i>
         </div> 
      </div>
    </>
  )
}

export default Productos
