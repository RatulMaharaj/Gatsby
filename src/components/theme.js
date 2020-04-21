import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div class="toggler">
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span class="slider round"></span>
          </label>
        </div>
      )}
    </ThemeToggler>
  )
}
