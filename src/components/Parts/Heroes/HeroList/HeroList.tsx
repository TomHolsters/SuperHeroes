import './herolist.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IHero } from '../../../../models/Hero'
import * as heroService from '../../../../services/hero.service'
import * as emoji from '../../../../services/emoji.service'
import ModifyBar from '../ModifyBar/ModifyBar'

export default function HeroList() {
  const dispatch = useDispatch();
  const heroes: Array<IHero> = useSelector(state => state.heroes)

  useEffect(() => {
    dispatch(heroService.getHeroes())
  }, [])

  const emo = () => {
    let max = 63044,
      min = 62976
    let code = Math.floor(Math.random() * (max - min + 1)) + min

    return <span className='emoji'>{emoji.convert(code)}</span>
  }

  return (
    <>
      <ModifyBar />
      <div className='herolist'>
  <h1>Available heroes</h1>
        <ul>
          {heroes.length <= 0 ? emo() : null}
          {heroes.map((h: IHero, i) => {
            return (
              <li key={i}>
                <Link to={`/heroes/${h.Id}`}>
                  {h.LogoImgUri && h.LogoImgUri !== '' ? (
                    <img className='hero-head' src={h.LogoImgUri}></img>
                  ) : (
                    <span className='hero-head' >{emo()} </span>
                  )}
                  <span className="hero-name"> {h.Name} </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
