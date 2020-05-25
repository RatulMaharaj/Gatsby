import React from 'react'
import Intro from "./intro"
import Postlist from "./postlist"
import About from "./about"
import Spotify from "./spotify"
import Footer from "./footer"
import "./sidebar.css"

export default () => (
    <section id="sidebar">
        <Intro id="intro"/>
        <Postlist/>
        <About/>
        <Spotify/>
        <Footer/>
    </section>
)