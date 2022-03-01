import React, { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import restcountries from "../apis/restcountries"

import FilterDropdown from "../components/FilterDropdown"
import CountryList from "../components/Country/CountryList"

const Homepage = () => {
  const [filter, setFilter] = useState("")
  const [filterRegion, setFilterRegion] = useState("")
  const [countriesDefault, setCountriesDefault] = useState(null)
  const [countries, setCountries] = useState(null)

  const fetchData = async () => {
    const { data } = await restcountries.get("/all")
    setCountries(data)
    setCountriesDefault(data)
  }

  const filterCountries = (e) => {
    setFilterRegion("all")
    const filtered = countriesDefault.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    setFilter(e.target.value)
    setCountries(filtered)
  }

  const onFilterRegion = (e) => {
    setFilterRegion(e.target.value)
    if (e.target.value === "all") return setCountries(countriesDefault)
    const filtered = countriesDefault.filter(
      (country) => country.region === e.target.value
    )
    setCountries(filtered)
  }

  useEffect(() => fetchData(), [])

  return (
    <div>
      <div className='md:flex justify-between'>
        <SearchBar value={filter} setFilter={filterCountries} />
        <FilterDropdown value={filterRegion} setFilter={onFilterRegion} />
      </div>
      <div>
        <CountryList countries={countries} />
      </div>
    </div>
  )
}

export default Homepage
