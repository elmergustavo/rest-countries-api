import React from "react"

import CountryDetail from "../components/Country/CountryDetail"

const CountryDetailPage = (props) => {
  return (
    <div>
      <CountryDetail route={props} />
    </div>
  )
}

export default CountryDetailPage
