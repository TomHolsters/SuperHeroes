import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import LoginModal from '../../Modal/LoginModal/LoginModal'


export default function Menu() {
  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShowLogin(false)

  return (
    <>
      <div className='menu'>
        <ul className='main-menu'>
          <li className='menu-item'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='menu-item'>
            <Link to={'/heroes'}>Hero list</Link>
          </li>
        </ul>
        <div className='login' onClick={() => setShowLogin(!showLogin)}>
          <p className='login-text'>Login</p>
        </div>
      </div>
      {showLogin ? <LoginModal onClose={handleClose} /> : null}
    </>
  )
}
