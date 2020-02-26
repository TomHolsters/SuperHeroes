import React from 'react';
import { Link } from 'react-router-dom'
import './menu.scss'

export default function Menu () {
    
    return(
        <>
            <ul className='main-menu'>
                <li className='menu-item'><Link to={'/'}>Home</Link></li>
                <li className='menu-item'><Link to={'/heroes'}>Hero list</Link></li>
                <li className='menu-item'><Link to={'/about'}>About</Link></li>
            </ul>
        </>
    )
}