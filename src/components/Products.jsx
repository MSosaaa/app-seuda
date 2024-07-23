import React from 'react'
import { productosFetch } from '../api/productosFetch'

const Products = ({producto}) => {
   
    const name = producto.name.split(',')
    const description = producto.description.split(',')
    const color = producto.color.split(',')
    const material = producto.material.split(',')
    const image = producto.image.split(',')
    const categoria = producto.categoria.split(',')

    return (
      <>
       <div className='img'>imagen</div>
       <div className='name'>name</div>
      </>
  )
}

export default Products
