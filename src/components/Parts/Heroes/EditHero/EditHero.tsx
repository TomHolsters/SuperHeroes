import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Error from '../../../Error/Error'
import CountryList from '../../../CountryList/CountryList'
import { IHero, Hero } from '../../../../models/Hero'

export default function EditHero({ hero, returnData }) {
  const [name, setName] = useState(hero.Name)
  const [age, setAge] = useState(hero.Age)
  const [power, setPower] = useState(hero.Power)
  const [country, setCountry] = useState(hero.Country ? hero.Country : '')
  const [imgUri, setImgUri] = useState(hero.ImgUri ? hero.ImgUri : '')
  const [logoImgUri, setLogoImgUri] = useState(
    hero.LogoImgUri ? hero.LogoImgUri : '',
  )
  const [imgLoadError, setImgLoadError] = useState(false)
  const [logoImgLoadError, setLogoImgLoadError] = useState(false)

  const changeForm = e => {
    let _hero = { ...hero }

    if (e.target.value.trim() === '' || e.target.value === null)
      _hero[convertToUpper(e.target.name)] = null
    else if (e.target.name !== 'age')
      _hero[convertToUpper(e.target.name)] = e.target.value
    else _hero[convertToUpper(e.target.name)] = parseInt(e.target.value)

    returnData(_hero)
  }

  // const changeForm = e => {
  //   if (e.target.value.trim() === '' || e.target.value === null)
  //     returnData(convertToUpper(e.target.name), null)
  //   else if (e.target.name !== 'age')
  //     returnData(convertToUpper(e.target.name), e.target.value)
  //   else returnData(convertToUpper(e.target.name), parseInt(e.target.value))
  // }

  const setImg = e => {
    if (e.target.name === 'imgUri') {
      setImgLoadError(false)
      setImgUri(e.target.value)
    } else {
      setLogoImgLoadError(false)
      setLogoImgUri(e.target.value)
    }
  }
  const imgLoadErr = () => {
    setImgLoadError(true)
  }
  const logoImgLoadErr = () => setLogoImgLoadError(true)

  return (
    <>
      <form onChange={e => changeForm(e)}>
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
              <CountryList
                country={country}
                countryCB={country => setCountry(country)}
              />
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

          <div className='row'>
            <div className='col'>
              {imgLoadError ? (
                <Error msg='Image not found' />
              ) : imgUri !== null && imgUri !== '' ? (
                <img
                  onError={imgLoadErr}
                  className='img-preview'
                  src={imgUri}
                />
              ) : null}
            </div>
            <div className='col'>
              {logoImgLoadError ? (
                <Error msg='Logo image not found' />
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
    </>
  )
}

const convertToUpper = prop => prop.substr(0, 1).toUpperCase() + prop.substr(1)
