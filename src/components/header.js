import React from "react"
import ThemeToggler from "./theme"
import { Link } from "gatsby"
import "./header.css"

export default () => {
  return (
    <header id="header">
      <div className="logo">
        <h1>
          <Link to="/">Ratul Maharaj</Link>
        </h1>
      </div>

      <div className="theme">
        <ThemeToggler />
      </div>
    </header>
  )
}
