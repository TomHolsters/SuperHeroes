import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory, useParams } from 'react-router-dom'
import * as heroService from '../../../../services/hero.service'
import ModifyBar from '../ModifyBar/ModifyBar'
import { IHero } from '../../../../models/Hero'
import HeroNavBar from '../HeroNavBar/HeroNavBar'
import unknown from '../../../../assets/unknown.png'
import './heropage.scss'

export default function HeroPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const hero: IHero = useSelector(state => state.hero)
  const heroes: Array<IHero> = useSelector(state => state.heroes)
  const hist = useHistory()
  const location = useLocation()
  let path = location.pathname

  useEffect(() => {
    document.addEventListener('keydown', changeHero, false)
    return () => document.removeEventListener('keydown', changeHero, false)
  }, []);
  useEffect(() => {
    dispatch(heroService.getHero(id))
    dispatch(heroService.getHeroes())
    document.addEventListener('keydown', changeHero, false)
    return () => document.removeEventListener('keydown', changeHero, false)
  }, [id])

  const changeHero = (e: KeyboardEvent) => {
    if (e.keyCode === 37) navigate(-1)
    if (e.keyCode === 39) navigate(1)
  }

  const navigate = (i: Number) => {
    if (i === 0 || heroes.length === 0) return

    let _index = heroes.findIndex(h => h.Id === id)

    path = path.substr(0, path.lastIndexOf('/') + 1)

    if (i === -1) {
      if (_index > 0) path += heroes[_index - 1].Id
      else path += heroes[heroes.length - 1].Id
    }

    if (i === 1) {
      if (_index < heroes.length - 1) path += heroes[_index + 1].Id
      else path += heroes[0].Id
    }

    hist.push(path)
  }

  return (
    <div className='hero-page-container' onLoad={navigate(0)}>
      {hero ? (
        <div>
          <ModifyBar/>
          <article>
            <div className='col'>
              <h1 className='name'>{hero.Name}</h1>
              <p>
                <span className='bold'>Id:</span> {hero.Id}
              </p>
              <p>
                <span className='bold'>Power:</span> {hero.Power}
              </p>
              <p>
                <span className='bold'>Age:</span> {hero.Age}
              </p>
              <p>
                <span className='bold'>Origin:</span> {hero.Country}
              </p>
            </div>
            <div className='col'>
              {hero.ImgUri !== '' && hero.ImgUri ? (
                <img src={hero.ImgUri} alt={hero.Name} />
              ) : 
              
                  <img src={unknown} />}
            </div>
          </article>
        </div>
      ) : (
        'no hero found'
      )}
      <HeroNavBar navigate={navigate} />
    </div>
  )
}
