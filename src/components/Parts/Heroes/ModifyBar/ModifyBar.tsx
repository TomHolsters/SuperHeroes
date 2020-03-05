import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import Button from '../../../Button/Button'
import CreateHeroModal from '../../../Modal/CreateHeroModal/CreateHeroModal'
import './modifybar.scss'
import ConfirmModal from '../../../Modal/ConfirmModal/ConfirmModal'
import EditModal from '../../../Modal/EditModal/EditModal'
import { IHero } from '../../../../models/Hero'

export default function ModifyBar() {
  const history = useHistory()
  const { id } = useParams()

  const heroes: Array<IHero> = useSelector(state => state.heroes)
  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [_heroes, setHeroes] = useState(heroes)
  const hero: IHero = useSelector(state => state.hero)

  useEffect(() => setHeroes(heroes), [])

  
  useEffect(() => {
    if (_heroes.length > 0 && heroes.length > 0 && heroes.length !== _heroes.length)  
     history.push('/heroes')
  }, [heroes])

  const saveHero = () => setAddModal(false)
  const updateHero = () => setEditModal(false)

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
              <EditModal
                _hero={hero}
                onClose={handleEditModal}
                onUpdate={updateHero}
              />
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
