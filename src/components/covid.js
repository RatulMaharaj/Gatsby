import React from 'react'

export default () => (
    <div>
        <h3>Covid-19 Stats (ZA)</h3>
        <br/>
        <ul className="alt">
                <li>
                    <h4>Confirmed cases: <q id="confirmed"></q></h4>
                </li>
                <li>
                    <h4>Deaths: <q id="deaths"></q></h4>
                </li>
                <li>
                    <h4>Recoveries: <q id="recovered"></q></h4>
                </li>
        </ul>
        <h4>Last updated on <q id="lastupdate"></q></h4>	
    </div>
)