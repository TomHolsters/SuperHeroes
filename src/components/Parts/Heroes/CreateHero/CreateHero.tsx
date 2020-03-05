import React, { useState } from 'react'
import './createhero.scss'
import CountryList from '../../../CountryList/CountryList'
import { Hero } from '../../../../models/Hero'
import Error from '../../../Error/Error'

export default function CreateHero({ returnData }) {
  let [name, setName] = useState('')
  let [age, setAge] = useState(30)
  let [country, setCountry] = useState('')
  let [power, setPower] = useState('')
  let [imgUri, setImgUri] = useState('')
  let [logoImgUri, setLogoImgUri] = useState('')
  let [imgLoadError, setImgLoadError] = useState(false)
  let [logoImgLoadError, setLogoImgLoadError] = useState(false)

  let _hero: Hero = new Hero(name, age, power, country, imgUri, logoImgUri)

  const setImg = e => {
    console.log(e.target)
    if (e.target.name === 'imgUri') {
      setImgLoadError(false)
      setImgUri(e.target.value)
    } else {
      setLogoImgLoadError(false)
      setLogoImgUri(e.target.value)
    }
  }

  const imgLoadErr = e => {
    setImgLoadError(true)
  }
  const logoImgLoadErr = () => setLogoImgLoadError(true)

  returnData(_hero)

  return (
    <form>
      <div className='input'>
        <div className='row'>
          <div className='col'>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              name='name'
              placeholder='Enter the name of the hero'
              value={name}
              onChange={e => setName(e.target.value)}></input>
          </div>
          <div className='col'>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='age'
              name='age'
              placeholder='30'
              min='0'
              value={age}
              onChange={e => setAge(parseInt(e.target.value))}></input>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor='country'>Country:</label>
            <CountryList countryCB={country => setCountry(country)} />
          </div>
          <div className='col'>
            <label htmlFor='power'>Power:</label>
            <input
              id='power'
              name='power'
              placeholder='E.g.: Flying'
              value={power}
              onChange={e => setPower(e.target.value)}></input>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <label htmlFor='imgUri'>Image:</label>
            <input
              id='imgUri'
              name='imgUri'
              placeholder='E.g.: http://example.com/'
              value={imgUri}
              onChange={e => setImg(e)}></input>
          </div>

          <div className='col'>
            <label htmlFor='logoImgUri'>Logo:</label>
            <input
              id='logoImgUri'
              name='logoImgUri'
              placeholder='E.g.: http://example.com/'
              value={logoImgUri}
              onChange={e => setImg(e)}></input>
          </div>
        </div>

        <div className='row img-row'>
          <div className='col'>
            {imgLoadError ? (
              <Error msg='Image not found'/>
            ) : imgUri !== null && imgUri !== '' ? (
              <img onError={imgLoadErr} className='img-preview' src={imgUri} />
            ) : null}
          </div>
          <div className='col'>
            {logoImgLoadError ? (
              <Error msg='Logo image not found'/>
            ) : logoImgUri !== null && logoImgUri !== '' ? (
              <img
                onError={logoImgLoadErr}
                className='img-preview'
                src={logoImgUri}
              />
            ) : null}
          </div>
        </div>
      </div>
    </form>
  )
}
