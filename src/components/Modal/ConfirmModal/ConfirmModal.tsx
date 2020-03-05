import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import BaseModal from '../BaseModal/BaseModal'
import * as heroService from '../../../services/hero.service'
import { IHero } from '../../../models/Hero'
import Button from '../../Button/Button'

export default function ConfirmModal({ onClose }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const hero: IHero = useSelector(state => state.hero);

  const deleteHero = () =>{
    dispatch(heroService.deleteHero(hero.Id ));
    onClose();
  } 


  const buttons = (
    <>
      <Button text='Cancel' onClick={() => onClose()} />
      <Button text={'Delete'} onClick={() => deleteHero()} />
    </>
  )

  return (
    <BaseModal
      title={'Are you sure?'}
      content={`Please confirm you want to delete ${hero.Name}`}
      buttons={buttons}
      onClose={onClose}
    />
  )
}
