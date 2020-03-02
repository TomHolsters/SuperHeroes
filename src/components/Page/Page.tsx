import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Parts/Home/Home'
import HeroList from '../Parts/Heroes/HeroList/HeroList'
import HeroPage from '../Parts/Heroes/HeroPage/HeroPage'
import AboutPage from '../Parts/AboutPage/AboutPage'
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
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </div>
  )
}
