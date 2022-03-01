import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import restcountries from "../../apis/restcountries"
import { formatNumber } from "../../utils/numberFormat"

const CountryDetail = (props) => {
  const { code } = props.route.match.params
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await restcountries.get(`/alpha/${code}`)
      setCountry(data)
    }
    fetchData()
  }, [code])

  return (
    <div>
      <div className='mb-10 max-w-1/12 min-w-max'>
        <Link
          to='/'
          className='flex items-center shadow bg-element_primary text-text_primary px-5 py-2 gap-5 text-black'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          Back
        </Link>
      </div>
      {!country ? (
        <h1>Loading...</h1>
      ) : (
        <div className='bg-element_primary text-text_primary rounded-xl md:flex md:justify-center md:items-center lg:justify-start lg:items-start md:gap-5'>
          <div className='md:w-1/2'>
            <img
              className='object-contain md:object-fill w-full rounded-t-xl'
              src={!country.flags ? "" : country.flags.svg}
              alt='flag'
            />
          </div>

          <div className=' p-8'>
            <h2 className='mb-4 text-2xl font-extrabold'>
              {!country.name ? "" : country.name}
            </h2>

            <div className='md:flex justify-around'>
              <div className='mb-8 mr-5'>
                <p className='mb-2 text-base font-semibold'>
                  Native Name :
                  <span className='font-light'>
                    {!country.nativeName ? "" : country.nativeName}
                  </span>
                </p>
                <p className='mb-2 text-base font-semibold'>
                  Population :
                  <span className='font-light'>
                    {!country.population
                      ? ""
                      : formatNumber(country.population)}
                  </span>
                </p>
                <p className='mb-2 text-base font-semibold'>
                  Region :{" "}
                  <span className='font-light'>
                    {!country.region ? "" : country.region}
                  </span>
                </p>
                <p className='mb-2 text-base font-semibold'>
                  Sub Region :
                  <span className='font-light'>
                    {!country.subregion ? "" : country.subregion}
                  </span>
                </p>
                <p className='text-base font-semibold'>
                  Capital :
                  <span className='font-light'>
                    {!country.capital ? "" : country.capital}
                  </span>
                </p>
              </div>

              <div className='mb-8'>
                <p className='mb-2 text-base font-semibold'>
                  Top Level Domain :
                  <span className='font-light'>
                    {country.topLevelDomain[0]}
                  </span>
                </p>
                <p className='mb-2 text-base font-semibold'>
                  Currencies :
                  {!country.currencies
                    ? ""
                    : country.currencies.map((curr, index) => (
                        <span key={curr.name} className='font-light'>
                          <span className='font-black'> ({curr.symbol}) </span>
                          {(index ? ", " : "") + curr.name}
                        </span>
                      ))}
                </p>
                <p className='mb-2 text-base font-semibold'>
                  Languages :
                  {!country.languages
                    ? ""
                    : country.languages.map((lang, index) => (
                        <span key={lang.name} className='font-light'>
                          {(index ? ", " : "") + lang.name}
                        </span>
                      ))}
                </p>
              </div>
            </div>

            <div className='md:flex justify-between items-center gap-2'>
              <p className='text-lg font-semibold'>Border Countries : </p>
              <div className='flex flex-wrap justify-center'>
                {!country.borders
                  ? ""
                  : country.borders.map((border) => (
                      <Link
                        to={`/country/details/${border}`}
                        key={border}
                        className='flex items-center shadow  m-1 px-5 py-2 '
                      >
                        {border}
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryDetail
