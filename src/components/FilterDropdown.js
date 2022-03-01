import React from "react"

const FilterDropdown = ({ value, setFilter }) => {
  return (
    <div className=' bg-element_primary rounded-lg mb-1 p-2 h-full md:w-tes md:mb-0'>
      <select
        className='w-full text-text_primary bg-element_primary p-2 rounded-lg outline-none border-0'
        name='region'
        id='region'
        value={value}
        onChange={setFilter}
      >
        <option value='' disabled>
          Filter by Region
        </option>
        <option value='all'>All</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default FilterDropdown
