import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as heroService from '../../../services/hero.service'
import BaseModal from '../BaseModal/BaseModal'
import { IHero } from '../../../models/Hero'
import Button from '../../Button/Button'
import EditHero from '../../Parts/Heroes/EditHero/EditHero'
import './editmodal.scss'

export default function EditModal({ _hero, onClose, onUpdate }) {
  const dispatch = useDispatch()
  const hero = useSelector(state => state.hero)
  const [disabled, setDisabled] = useState(true)

  const updateData = (updateHero: IHero) => {
    if (updateHero !== hero) {
      Object.assign(hero, updateHero)
      setDisabled(false)
    } else setDisabled(true)
  }

  const content = (
    <EditHero hero={hero} returnData={updateHero => updateData(updateHero)} />
  )

  const save = () => {
    dispatch(heroService.updateHero(hero, hero.Id))
    onUpdate()
  }

  const buttons = (
    <>
      <Button text='Cancel' onClick={onClose} />
      <Button
        text='Save'
        onClick={!disabled ? save : null}
        disabled={disabled}
      />
    </>
  )

  return (
    <>
      <BaseModal
        title={`Change ${hero.Name}`}
        buttons={buttons}
        content={content}
        onClose={onClose}
      />
    </>
  )
}
