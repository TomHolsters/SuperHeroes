import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import Button from '../../../Button/Button'
import CreateHeroModal from '../../../Modal/CreateHeroModal/CreateHeroModal'
import './modifybar.scss'
import ConfirmModal from '../../../Modal/ConfirmModal/ConfirmModal'
import EditModal from '../../../Modal/EditModal/EditModal'
import { IHero } from '../../../../models/Hero'
import * as heroService from '../../../../services/hero.service'

export default function ModifyBar() {
  const history = useHistory()
  const { id } = useParams()

  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [_heroes, setHeroes] = useState([])
  const heroes: Array<IHero> = useSelector(state => state.heroes)

  useEffect(() => {
    if (_heroes.length > 0 && heroes.length !== _heroes.length) {
      console.log('deleted')
      setTimeout(history.push('/heroes'), 1000)
    }
  }, [heroes])

  useEffect(() => {
    console.log('change')
    setHeroes(heroes)
  }, [])

  const saveHero = () => setAddModal(false)

  const handleAddModal = () => setAddModal(!addModal)
  const handleDeleteModal = () => setDeleteModal(!deleteModal)
  const handleEditModal = () => setEditModal(!editModal)

  return (
    <div className='mod-bar'>
      <>
        {id !== '' && id !== undefined ? (
          <>
            <Button text='Edit' disabled={false} onClick={handleEditModal} />
            {editModal ? (
              <EditModal onClose={() => handleEditModal()} onSave={null} />
            ) : null}
            <Button
              text='Delete'
              type={'delete'}
              disabled={false}
              onClick={() => setDeleteModal(true)}
            />
            {deleteModal ? <ConfirmModal onClose={handleDeleteModal} /> : null}
          </>
        ) : (
          <>
            <Button text='Add' disabled={false} onClick={handleAddModal} />
            {addModal ? (
              <CreateHeroModal onClose={handleAddModal} onSave={saveHero} />
            ) : null}
          </>
        )}
      </>
    </div>
  )
}
