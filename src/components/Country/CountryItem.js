import React from "react"
import { Link } from "react-router-dom"
import { formatNumber } from "../../utils/numberFormat"

const CountryItem = (props) => {
  const { name, population, region, capital, flags, alpha3Code } = props.country
  return (
    <div className='bg-element_primary text-text_primary rounded-xl w-full p-6 mb-10  lg:w-tes lg:p-0'>
      <div className='shadow-xl rounded-xl'>
        <img
          className='object-contain lg:object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl'
          src={flags.svg}
          alt='flag'
        />
        <div className='p-4 lg:p-8 '>
          <h2 className='mb-4 text-lg font-extrabold  '>{name}</h2>
          <p className='mb-2 text-base font-semibold'>
            Population :{" "}
            <span className='font-light'>{formatNumber(population)}</span>
          </p>
          <p className='mb-2 text-base font-semibold'>
            Region : <span className='font-light'>{region}</span>
          </p>
          <p className='text-base font-semibold'>
            Capital : <span className='font-light'>{capital}</span>
          </p>
        </div>
        <div className='px-6 py-4 rounded-b-xl'>
          <Link
            to={`/country/details/${alpha3Code}`}
            className='inline-flex items-center mt-auto font-semibold'
          >
            View Detail Information »
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CountryItem
