import React from 'react'
import './error.scss'

export default function Error({ msg }) {
  return (
    <>
      <p className='err'>
        <span className='error'>Error:</span>
        <span className='error-msg'> {msg}</span>
      </p>
    </>
  )
}
