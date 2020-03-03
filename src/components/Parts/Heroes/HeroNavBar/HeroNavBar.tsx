import React from 'react'
import * as emoji from '../../../../services/emoji.service'
import './heronavbar.scss'

export default function HeroNavBar({ navigate }) {
  const getEmoji = code => emoji.convert(code)

  return (
    <div className='hero-nav-bar'>
      <div className='nav-button previous' onClick={() => navigate(-1)}>
        {getEmoji('f448')}
      </div>
      <div className='nav-button next' onClick={() => navigate(1)}>
        {getEmoji('f449')}
      </div>
    </div>
  )
}
