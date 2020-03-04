import React, { useState } from 'react'
import BaseModal from '../BaseModal/BaseModal'
import Login from '../../Parts/Login/Login'
import Button from '../../Button/Button'
import { User } from '../../../models/User'
import ForgotPassword from '../../Parts/Login/ForgotPassword/ForgotPassword'
import CreateAccount from '../../Parts/Login/CreateAccount/CreateAccount'
import './loginmodal.scss'

export default function LoginModal({ onClose }) {

  let _user: User

  const getUser = (user: User) => {
    console.log(user)
    _user = user
  }



  const content = (
    <>
          <Login returnData={getUser} />
    </>
  )

  return (
    <BaseModal
      content={content}
      title={'Login'}
      onClose={onClose}
    />
  )
}
