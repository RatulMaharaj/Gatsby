import React from 'react'
import Intro from "./intro"
import Miniposts from "./miniposts"
import Postlist from "./postlist"
import About from "./about"
import Spotify from "./spotify"
import Footer from "./footer"
// import { Link } from "gatsby"

export default () => (
    <section id="sidebar">
        <Intro id="intro"/>
        {/* <Miniposts/> */}
        <Postlist/>
        <About/>
        <Spotify/>
        <Footer/>
    </section>
)