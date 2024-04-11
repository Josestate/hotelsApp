import React from 'react'
import { Link } from 'react-router-dom'
import './styles/PrincipalHeader.css'

const PrincipalHeader = () => {
  return (
    <header className='principalHeader'>
      <h1 className='principakHeader_logo'><Link to='/' className='principalHeader_link'>Hotels-app</Link></h1>
      <nav className='principalHeader_nav'>
        <ul className='principalHeader_list'>
          <li><Link to='/reservations' className='principalHeader_link' >Reservations</Link></li>
          <li><Link to='/register' className='principalHeader_link' >Register</Link></li>
          <li><Link to='/login' className='principalHeader_link' >Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default PrincipalHeader