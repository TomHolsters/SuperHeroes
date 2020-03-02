import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as heroService from '../../../services/hero.service'
import BaseModal from '../BaseModal/BaseModal'
import { IHero } from '../../../models/Hero'
import Button from '../../Button/Button'

export default function EditModal({ onClose, onSave }) {
  const dispatch = useDispatch()
  let [disabled, setDisabled] = useState(true)
  let _hero: IHero;

  //   const content = <EditHero returnData={getData} />
  const content = <p>Edit</p>

  const save = () => {
    dispatch(heroService.addHero(_hero))
    onSave()
  }

  const buttons = (
    <>
      <Button text='Cancel' onClick={onClose} />
      <Button
        text='Save'
        onClick={disabled ? null : save}
        disabled={disabled}
      />
    </>
  )

  return (
    <>
      <BaseModal
        title={`Change superhero `} // ${_hero ? ': ' + _hero.name : ''}`}
        buttons={buttons}
        content={content}
        onClose={onClose}
      />
    </>
  )
}
