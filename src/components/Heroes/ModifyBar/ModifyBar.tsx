import React, { useState } from 'react'
import './modifybar.scss'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'

export default function ModifyBar({ heroName = '' }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

 ∆ const handleDelete = () => {
    setShowDeleteModal(!showDeleteModal)
  }
  const handleEdit = () => {
    setShowEditModal(!showEditModal)
  }
  const handleAddConfirm = () => {
    console.log('add - confirm')
    setShowAddModal(false)
  }
  const handleAddCancel = () => {
    console.log('add - cancel')
    setShowAddModal(false)
  }
  const handleEditConfirm = () => {
    console.log('edit - confirm')
    setShowEditModal(false)
  }
  const handleEditCancel = () => {
    setShowEditModal(false)
  }
  const handleAdd = () => {
    console.log('adding hero')
    setShowAddModal(!showAddModal)
  }

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false)
} 

const toggleModal = () => {
    setShowModal(!showModal)
      console.log('closing current modal');
  }

  return (
    <div className='mod-bar'>
      {heroName === '' ? (
        <>
          <Button
            text='Add'
            type='add'
            disabled={false}
            clickCallBack={handleAdd}
          />
          <Modal
            toggle={toggleModal}
            type='Add'
            title={`Add a new superhero`}
            content={`Form goes here`}>
            <Button text='Cancel' clickCallBack={handleAddCancel} />
            <Button text='Save' clickCallBack={handleAddConfirm} />
          </Modal>
        </>
      ) : (
        <>
          <Button text='Edit' disabled={false} clickCallBack={handleEdit} />
          <Modal toggle={toggleModal} type='edit' title={`Edit ${heroName}`}>
            <Button
              text='Cancel'
              disabled={false}
              clickCallBack={handleEditCancel}
            />
            <Button
              text='Save'
              disabled={false}
              clickCallBack={handleEditConfirm}
            />
          </Modal>
          <Button
            text='Delete'
            disabled={false}
            type={'delete'}
            clickCallBack={handleDelete}
          />
          <Modal
            toggle={toggleModal}
            type='delete'
            title={`Confirm deletion of ${heroName}`}
            content={`Are you sure you want to delete ${heroName}?`}>
            <Button
              text={`Yes, I'm sure`}
              clickCallBack={handleDeleteConfirm}
            />
          </Modal>
        </>
      )}
    </div>
  )
}
