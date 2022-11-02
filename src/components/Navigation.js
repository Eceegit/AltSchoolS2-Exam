import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    const activeStyle = ({isActive}) => {
      return {
        color: isActive ? 'red' : '#232323', 
        
      }

    }


  return (
    <main className='navbar'>
        <div className='logo'>
          AfriNat.
        </div>

        <nav className='navlinks'>
          <NavLink to="/" className='navlink' style={activeStyle}>Home</NavLink>{' '}
          <NavLink to="/about" className='navlink' style={activeStyle}>About</NavLink>{' '}
          <NavLink to="/contact" className='navlink' style={activeStyle}>Contact</NavLink>{' '}
          <NavLink to="/users" className='navlink' style={activeStyle}>Users</NavLink>{' '}
        </nav>
    </main>

  )
}

export default Navigation