import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as heroService from '../../../services/hero.service'
import BaseModal from '../BaseModal/BaseModal'
import Button from '../../Button/Button'
import CreateHero from '../../Parts/Heroes/CreateHero/CreateHero'
import { Hero } from '../../../models/Hero'

export default function CreateHeroModal({ onClose, onSave }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  let _hero: Hero;

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
      title={`Add a new superhero`}
      buttons={buttons}
      content={content}
      onClose={onClose} />
  )
}
