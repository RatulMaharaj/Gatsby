import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Menu from "./menu"

export default ({children}) => (
    <div id="wrapper">
    <Helmet defaultTitle="Ratul Maharaj">
            <html lang="en" />
    </Helmet>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
    <script src="js/covid.js"/>
    <script src="js/browser.min.js"/>
    <script src="js/breakpoints.min.js"/>
    <script src="js/util.js"/>
    <script src="js/main.js"/>

    <Header/>
    <Menu/>
    {children}
    </div>
)

