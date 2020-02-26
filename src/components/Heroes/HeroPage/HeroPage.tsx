import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './heropage.scss'
import * as heroService from '../../../services/hero.service'
import ModifyBar from '../ModifyBar/ModifyBar'

export default function HeroPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const hero = useSelector(state => state.hero)

  useEffect(() => {
    dispatch(heroService.getHero(id))
  }, [])

  return (
    <div className='hero-page-container'>
      {hero ? (
        <div>
          <ModifyBar heroName={hero.name} />
          <article>
            <h1 className='name'>{hero.name}</h1>
            <p>
              <span className='bold'>Id:</span> {id}
            </p>
            <p>
              <span className='bold'>Power:</span> {hero.power}
            </p>
            <p>
              <span className='bold'>Age:</span> {hero.age}
            </p>
            <p>
              <span className='bold'>Origin:</span> {hero.country}
            </p>
          </article>
        </div>
      ) : (
        'nope'
      )}
    </div>
  )
}
