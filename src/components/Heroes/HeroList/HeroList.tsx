import './herolist.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Hero } from '../../../models/Hero'
import * as heroService from '../../../services/hero.service'
import ModifyBar from '../ModifyBar/ModifyBar'

export default function HeroList() {
  const dispatch = useDispatch();
  const heroes: Array<Hero> = useSelector(state => state.heroes);

  useEffect(() => {
      dispatch(heroService.getHeroes())
  }, []);

  const list = heroes.map((h, i) => {
    return (
      <li key={i}>
        <Link to={`/heroes/${h.id}`}>
          <span>{h.id}. {h.name}</span>
        </Link>
      </li>
    )
  })

  return (
    <>
    <ModifyBar />
    <div className='herolist'>
      <h1>Available heroes</h1>
        <ul>
            {list}
        </ul>
    </div>
    </>
  )
}
