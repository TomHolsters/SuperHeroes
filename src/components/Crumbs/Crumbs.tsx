import './crumbs.scss'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as heroService from '../../services/hero.service'
import { Hero } from '../../models/Hero'

export default function Crumbs() {
  const location = useLocation()
  let locArray = location.pathname.length === 1 ? [''] : location.pathname.split('/');
  let id = '';

  const dispatch = useDispatch()
  const hero: Hero = useSelector(state => state.hero)

  useEffect(() => dispatch(heroService.getHero(id)), [id]);

  let path = locArray.map((locEl: string, i: number) => {
    let toText: string
    switch (i) {
      case 0:
        toText = 'Home'
        break
      case 1:
        toText = locEl
        break
      case 2:
        id = locEl;
        toText = hero.name;
        break
      }

    return (
      <li key={i}>
        <Link to={`/${locEl}`}>{toText ? toText.toUpperCase() : ''}</Link>
      </li>
    )
  })

  return (
    <>
      <nav className='crumbs'>
        <ul>{path}</ul>
      </nav>
    </>
  )
}
