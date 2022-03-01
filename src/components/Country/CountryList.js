import React from "react"

import CountryItem from "./CountryItem"

const CountryList = ({ countries }) => {
  return (
    <div className='px-5 py-8 mx-auto lg:px-0'>
      <div className='flex flex-wrap mb-12 text-left justify-between'>
        {!countries ? (
          <h1>Loading...</h1>
        ) : (
          countries.map((country) => (
            <CountryItem key={country.alpha3Code} country={country} />
          ))
        )}
      </div>
    </div>
  )
}

export default CountryList
