import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as heroService from '../../../services/hero.service'
import BaseModal from '../BaseModal/BaseModal'
import Button from '../../Button/Button'
import CreateHero from '../../Parts/Heroes/CreateHero/CreateHero'
import { Hero } from '../../../models/Hero'

export default function CreateHeroModal({ onClose, onSave }) {
  let _hero: Hero;
  const dispatch = useDispatch();
  let [disabled, setDisabled] = useState(true);

  const getData = (hero: Hero) => {
    setDisabled(Object.values(hero).filter(v => v === '').length !== 0)
    _hero = hero;
  }

  const save = () => {
    dispatch(heroService.addHero(_hero));
    onSave();
  }

  const content = <CreateHero returnData={getData} />

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
    <BaseModal
      title={`Add a new superhero`} // ${_hero ? ': ' + _hero.name : ''}`}
      buttons={buttons}
      content={content}
      onClose={onClose} />
  )
}
