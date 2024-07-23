import React, {useEffect} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import '../css/header.css'
import LOGO from '../image/LOGO.PNG'
import Products from './Products'


const Header = () => {

  const {name} = Products

  const {searchParams, setSearchParams} = useSearchParams()
   
  const handlChange = (e) => {
    const filtrar = e.target.value
    setSearchParams({ name: filtrar })
  }
  
  return (
      <header className='header'>
         <div className='header__conteiner-logo'>
          <img className='header__logo ' src={LOGO} alt='logo'/>
         </div>  
         <div className='header__conteiner-buscador'>
          <input 
           className='header__buscador'
           type='text' onChange={handlChange} 
           value={searchParams.get('name') ? searchParams.get('personaje') : ''}>
          </input>
          <ul>
            {Productos.filter(() => {
                let filter = searchParams.get('name')
                let name = item.name.toLowerCase()

                if(!filter) {
                  return true
                } else {
                  return name.startsWith(filter.toLowerCase())
                }
            })
            .map((item) =>{
              <li key={item.name}>
                <Link to={`/productos/${item.name}`}>{item.name}</Link>
              </li>
            })
            }
          </ul>
          <i className="bi bi-search-heart"></i>
         </div>
      </header>
    
  )
}

export default Header

