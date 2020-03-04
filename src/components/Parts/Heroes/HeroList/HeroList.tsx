import './herolist.scss'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IHero } from '../../../../models/Hero'
import * as heroService from '../../../../services/hero.service'
import * as emoji from '../../../../services/emoji.service'
import ModifyBar from '../ModifyBar/ModifyBar'
import unknown from '../../../../assets/unknown.png'

export default function HeroList() {
  const dispatch = useDispatch()
  const heroes: Array<IHero> = useSelector(state => state.heroes)
  const [hero, setHero] = useState(null)

  useEffect(() => {
    dispatch(heroService.getHeroes())
  }, [])

  const emo = () => {
    const max = 63044, min = 62976
    const code = Math.floor(Math.random() * (max - min + 1)) + min

    return <span className='emoji'>{emoji.convert(code)}</span>
  }

  const hovered = hero ? hero.ImgUri : unknown

  return (
    <>
      <ModifyBar />
      <div className='herolist'>
        <div className='list'>
          <h1>Available heroes</h1>
          <ul>
            {heroes.map((h: IHero, i) => {
              return (
                <li key={i} onMouseEnter={() => setHero(h)}>
                  <Link to={`/heroes/${h.Id}`}>
                    {h.LogoImgUri && h.LogoImgUri !== '' ? (
                      <img className='hero-head' src={h.LogoImgUri}></img>
                    ) : (
                      // <span className='hero-no-head'>{emo()} </span>
                      <span className='hero-no-head'>
                        <span className='emoji'>{emoji.convert(63765)}</span>
                        </span>
                    )}
                    <span className='hero-name'> {h.Name} </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='image'>
          <img src={hovered} />
        </div>
      </div>
    </>
  )
}
