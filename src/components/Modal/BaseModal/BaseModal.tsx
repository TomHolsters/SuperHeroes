import React from 'react'
import './basemodal.scss'

export default function BaseModal({
  title = 'Title',
  content,
  buttons,
  onClose,
}) {
  const closeModal = () => {
    onClose()
  }

  const insideClick = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  const edit = () => {
    return (
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name'></input>
      </div>
    )
  }

  return (<div className='modal-container' onClick={closeModal}>
    <div className='modal' onClick={insideClick}>
      <div className='close-modal' onClick={closeModal}>
        X
      </div>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='content'>{content}</div>

      <div className='buttons'>{buttons}</div>
    </div>
  </div>)
}
