import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="header">
            <div className="logo">Logo</div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
                    <li className="nav-item"><NavLink to='/about'>About</NavLink></li>
                    <li className="nav-item"><NavLink to='/service'>Service</NavLink></li>
                    <li className="nav-item"><NavLink to='/contact'>Contact</NavLink></li>
                    <li className="nav-item buttonm"><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar