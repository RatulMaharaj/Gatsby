import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Menu from "./menu"

export default ({children}) => (
    <div id="wrapper">
    <Helmet defaultTitle="Ratul Maharaj">
        <html lang="en" />
        <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <script src="js/browser.min.js"/>
        <script src="js/breakpoints.min.js"/>
        <script src="js/util.js"/>
        <script src="js/main.js"/>
    </Helmet>

    <Header/>
    <Menu/>
    {children}
    </div>
)

