import React from "react";
import Header from "./header"
import Menu from "./menu"

export default ({children}) => (
    <div id="wrapper">
    <Header/>
    <Menu/>
    {children}
    </div>
)

