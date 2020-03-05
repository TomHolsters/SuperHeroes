import React, { useState } from 'react'
import { User } from '../../../models/User'
import './login.scss'
import Button from '../../Button/Button'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import CreateAccount from './CreateAccount/CreateAccount'

export default function Login({ returnData }) {
  const [forgotPwd, setForgotPwd] = useState(false)
  const [createAccount, setCreateAccount] = useState(false)
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  let _user = new User(name, pwd)

  const checkBtnDisabled = () => {
    let err = { name: false, pwd: false }
    setBtnDisabled(true)
    if (!name || name.length <= 0) err.name = true
    if (!pwd || pwd.length <= 0) err.pwd = true

    console.log(err)

    setBtnDisabled(!err.name && !err.pwd)
  }

  returnData(_user)

  const goBack = () => {
    setForgotPwd(false)
    setCreateAccount(false)
  }

  const login = () => {
    console.log('login ', _user)
  }

  const btn = () => {
    if (forgotPwd)
      return (
        <>
          <Button onClick={login} text='Request a new password' />
          <Button onClick={goBack} text='Go back' />
        </>
      )
    else if (createAccount)
      return (
        <>
          <Button onClick={login} text='Create an account' />
          <Button onClick={goBack} text='Go back' />
        </>
      )
    else return <Button onClick={login} text='Login' />
  }

  const buttons = btn()

  const returnKey = key => {
    if (key === 13) returnData(_user)
  }

  const inputChange = e => {
    if (e.target.name === 'username') setName(e.target.value)
    if (e.target.name === 'password') setPwd(e.target.value)

    checkBtnDisabled()
  }

  return (
    <>
      {forgotPwd || createAccount ? (
        forgotPwd ? (
          <ForgotPassword />
        ) : (
          <CreateAccount />
        )
      ) : (
        <div className='login-form'>
          <form onKeyDown={e => returnKey(e.keyCode)}>
            <div className='input-field'>
              <label htmlFor='username'>Username:</label>
              <input
                autoFocus
                type='text'
                name='username'
                onChange={e => inputChange(e)}
              />
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                onChange={e => inputChange(e)}></input>
            </div>
          </form>

          <div className='login-options'>
            <span onClick={() => setForgotPwd(true)}>Forgot password?</span>
            <span onClick={() => setCreateAccount(true)}>
              Create an account
            </span>
          </div>
          <Button
            onClick={() => console.log('login')}
            text='Login'
            disabled={btnDisabled}
          />
        </div>
      )}
    </>
  )
}
