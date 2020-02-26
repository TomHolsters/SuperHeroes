import React, { useState } from 'react'
import './modal.scss'
import Button from '../Button/Button'

export default function Modal({
  toggle,
  title = 'Title',
  content = 'Content',
  children,
  type,
}) {

    const outsideClick = () => {
        console.log('click outside registered');
        toggle = false;
    }

    const insideClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

  const edit = () => {
    return (
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name'></input>
      </div>
    )
  }

  const showModal = () => {
    return toggle ? (
      <div className='modal-container' onClick={outsideClick}>
        <div className='modal' onClick={insideClick}>
          <div className='title'>
            <h1>{title}</h1>
          </div>
          <div className='content'>{type == 'delete' ? content : edit}</div>

          <div className='buttons'>{children}</div>
        </div>
      </div>
    ) : null
  }

  return <div>{showModal()}</div>
}
