import React, { useState, useEffect } from "react"
import CountUp from 'react-countup';

export default () => {
  // Client-side Runtime Data Fetching
  const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=South%20Africa`

  const [Deaths, setDeaths] = useState(0)
  const [Confirmed, setConfirmed] = useState(0)
  const [Recoveries, setRecoveries] = useState(0)
  const [LastUpdate, setLastUpdate] = useState("")
  
  useEffect(() => {
    // get data using fetch
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "d44a34af09msh87c6734aee1c3f7p14e9e3jsn9dcb321a4dc7",
      },
    }).then(response => response.json()) // parse JSON from request
    .then(resultData =>{
      setDeaths(resultData["data"]["covid19Stats"][0]["deaths"])
      setConfirmed(resultData["data"]["covid19Stats"][0]["confirmed"])
      setRecoveries(resultData["data"]["covid19Stats"][0]["recovered"])
      setLastUpdate(resultData["data"]["covid19Stats"][0]["lastUpdate"])
    })

  },[])
  
  return (
    <div>
      <h3>Covid-19 Stats (ZA)</h3>
      <br />
      <ul className="alt">
        <li>
            <h4>Confirmed cases: <CountUp end={Confirmed}/></h4>
        </li>
        <li>
          <h4>Deaths: <CountUp end={Deaths}/></h4>
        </li>
        <li>
          <h4>Recoveries: <CountUp end={Recoveries}/></h4>
        </li>
      </ul>
      <h4>
        Last updated on {LastUpdate}
      </h4>
    </div>
  )
}
