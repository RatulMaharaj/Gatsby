import React from 'react'
import Covid from './covid'

export default (props) => (
    <section {...props}>
        <header>
            <h2>Ratul Maharaj</h2>
            <p>Actuarial Student, <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=cape+town"> 
            Cape Town</a></p>
        </header>
        <br/>
        <Covid/>
    </section>
)