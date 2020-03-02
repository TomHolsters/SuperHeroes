import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { IHero } from '../../../../models/Hero'
import * as emoji from '../../../../services/emoji.service'
import * as heroService from '../../../../services/hero.service'
import './heronavbar.scss'

export default function HeroNavBar({ id }) {
  const dispatch = useDispatch()
  const hist = useHistory()
  const heroes: Array<IHero> = useSelector(state => state.heroes)

  const getEmoji = code => emoji.convert(code)

  const location = useLocation()
  let path = location.pathname

  useEffect(() => {
    if (heroes.length === 0) dispatch(heroService.getHeroes())
  }, [])

  const navigate = i => {
    if (i === 0) return

    let _index = heroes.findIndex(h => h.Id === id)

    path = path.substr(0, path.lastIndexOf('/') + 1)

    if (i < 0) {
      if (_index > 0) path += heroes[_index - 1].Id
      else path += heroes[heroes.length - 1].Id
    }

    if (i > 0) {
      if (_index < heroes.length - 1) path += heroes[_index + 1].Id
      else path += heroes[0].Id
    }

    hist.push(path)
  }

  return (
    <div className='hero-nav-bar'>
      <div className='nav-button previous' onClick={() => navigate(-1)}>
        {getEmoji('f448')}
      </div>
      <div className='nav-button next' onClick={() => navigate(1)}>
        {getEmoji('f449')}
      </div>
    </div>
  )
}
