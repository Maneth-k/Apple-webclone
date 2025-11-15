import React from 'react'
import { navItems } from '../constants'
const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="public/logo.svg" alt="" />
        <ul>
            {navItems.map((item)=>(
                <li key={item.label}><a href={item.label}>{item.label}</a></li>
            ))}
        </ul>
        <div className='flex-center gap-3'>
            <button>
                <img src="public/search.svg" alt="" />
            </button>
            <button>
                <img src="public/cart.svg" alt="" />
            </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
