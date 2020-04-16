import React from 'react'
import Covid from "./covid"
import Miniposts from "./miniposts"
import Postlist from "./postlist"
import About from "./about"
import Spotify from "./spotify"
import Footer from "./footer"
// import { Link } from "gatsby"

export default () => (
    <section id="sidebar">
        <section id="intro">
            <header>
                <h2>Ratul Maharaj</h2>
                <p>Actuarial Student, <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=cape+town"> 
                Cape Town</a></p>
            </header>
            <br/>
            <Covid/>
        </section>
        <Miniposts/>
        <Postlist/>
        <About/>
        <Spotify/>
        <Footer/>
    </section>

)