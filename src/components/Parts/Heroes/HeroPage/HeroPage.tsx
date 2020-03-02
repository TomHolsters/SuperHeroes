import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as heroService from '../../../../services/hero.service'
import ModifyBar from '../ModifyBar/ModifyBar'
import { IHero } from '../../../../models/Hero'
import HeroNavBar from '../HeroNavBar/HeroNavBar'
import './heropage.scss'

export default function HeroPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const hero: IHero = useSelector(state => state.hero)

  useEffect(() => {
    dispatch(heroService.getHero(id))
  }, [id])


  return (
    <div className='hero-page-container'>
      {hero ? (
        <div>
          <ModifyBar />
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
              ) : null}
            </div>
          </article>
        </div>
      ) : (
        'no hero found'
      )}
      <HeroNavBar id={id}/>
    </div>
  )
}
