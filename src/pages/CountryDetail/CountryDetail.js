import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import '../../App'
import { IoMdArrowBack } from 'react-icons/io'
import Button from '../../components/Button/Button'
import CountryData from '../../components/CountryData/CountryData'
import Loading from '../../components/Loading/Loading'
import { NotFound } from '../Error/Error'

import { CountryDetailSection, Wrapper } from './CountryDetail.styles'

const axios = require('axios')

function CountryDetail({ match, history }) {
  const [country, setCountryData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoadingState] = useState(true)
  const FILTER_PARAMS =
    'fields=name;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders'
  const countryName = match.params.country
  let API_URL = ` https://api.countrylayer.com/v2/name/${countryName}?access_key=((2de74338868d48cf9f7d266a9734ff4d))&FullText=true&${FILTER_PARAMS}?access_key=2de74338868d48cf9f7d266a9734ff4d`

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const res = await axios.get(API_URL)
        if (res.status === '400') {
          throw new Error()
        }
        setCountryData(res.data[0])
        setLoadingState(false)
      } catch (error) {
        setError(true)
        setLoadingState(false)
      }
    }

    getCountryData()
  }, [API_URL])

  return (
    <CountryDetailSection>
      <Wrapper>
        <div>
          {' '}
          {!loading && (
            <Button onClick={() => history.goBack()}>
              <IoMdArrowBack className='icon' />
              Back{' '}
            </Button>
          )}{' '}
        </div>{' '}
        {loading ? (
          <Loading />
        ) : error ? (
          error && <NotFound text={'Country not found'} />
        ) : (
          country && <CountryData country={country} />
        )}{' '}
      </Wrapper>{' '}
    </CountryDetailSection>
  )
}

export default withRouter(CountryDetail)
