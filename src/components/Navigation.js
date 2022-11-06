import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from './Home'



class Navigation extends Component  {
    state = {clicked: false}
    handleClicked = () => {
      this.setState({clicked: !this.state.clicked})
    }
    render() {

      const activeStyle = ({isActive}) => {
        return {
          color: isActive ? 'red' : '#232323', 
          
        }
  
      }
  
  
    return (
      <main className='navbar'>
          <div className='logo'>
            AfriNat<span>.</span>
          </div>
  
          <nav id='navlinks' className={this.state.clicked ? "#navlinks active" :
            "#navlinks"
        }>
            <NavLink to="/" className='navlink' style={activeStyle}>Home</NavLink>{' '}
            <NavLink to="/about" className='navlink' style={activeStyle}>About</NavLink>{' '}
            <NavLink to="/contact" className='navlink' style={activeStyle}>Contact</NavLink>{' '}
            <NavLink to="/users" className='navlink' style={activeStyle}>Users</NavLink>{' '}
            <button onClick={logout} className='navlink logOut'>Log out</button>
  
            <div id="mobile-screen" onClick={this.handleClicked} className='toggle' >
              <i id='toggle-bar' 
              className={this.state.clicked ? "fa-solid fa-xmark" :
                "fa-solid fa-bars"
              }></i>
            </div>
          </nav>
      </main>
  
    )
    }
}

export default Navigation