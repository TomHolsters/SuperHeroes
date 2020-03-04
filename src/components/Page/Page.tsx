import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Parts/Home/Home'
import HeroList from '../Parts/Heroes/HeroList/HeroList'
import HeroPage from '../Parts/Heroes/HeroPage/HeroPage'
import LoginPage from '../Modal/LoginModal/LoginModal'
import './page.scss'
import Crumbs from '../Crumbs/Crumbs'

export default function Page() {
  return (
    <div className='page'>
      <Crumbs />
    <div className='page-container'>
      <Switch>
        <Route path='/heroes/:id'>
          <HeroPage />
        </Route>
        <Route path='/heroes'>
          <HeroList />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </div>
  )
}
