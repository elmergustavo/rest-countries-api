import React from "react"

const SearchBar = ({ setFilter, value }) => {
  return (
    <div className='bg-element_primary shadow-lg p-2 mb-8 flex rounded-lg md:w-tes'>
      <span className='w-auto flex justify-end items-center text-text_primary p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </span>
      <input
        className='w-full text-text_primary bg-element_primary rounded p-2 focus:outline-none'
        type='text'
        placeholder='Search for a country...'
        onChange={setFilter}
        value={value}
      />
    </div>
  )
}

export default SearchBar
