import React from 'react'
import Covid from './covid'
import "./intro.css"

export default (props) => (
    <section {...props}>
        <div className="Introheader">
            <h2>Ratul Maharaj</h2>
            <p>Actuarial Student, <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=cape+town"> 
            Cape Town</a></p>
        </div>
        <Covid/>
    </section>
)