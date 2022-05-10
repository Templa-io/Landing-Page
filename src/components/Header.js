import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
       <header classname='header'>
         <div>
           <Link to='/'>M</Link>
         </div>
         <nav className='navbar'>
           <ul>
             <Link className='Links' to='/sample'>Sample</Link>
             <Link  className='Links'to='/layout'>Layouts</Link>
             <Link className='Links' to='/fetures'>Features</Link>
             <Link className='Links' to='/our-shop'>Our Shop</Link>
             <Link className='Links' to='/buy-theme'>Buy Theme</Link>
             <Link className='Links'  to='/search '>Search</Link>
           </ul>
         </nav>


       </header>
      
    </>
  )
}

export default Header
