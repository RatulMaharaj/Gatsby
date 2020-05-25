import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { IoIosSunny, IoIosMoon } from "react-icons/io"

function themeIcon(theme) {
  if (theme === "dark") {
    return <IoIosMoon className="moon" />
  } else {
    return <IoIosSunny className="sun" />
  }
}

export default () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="toggler">
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <span className="themeIcon">{themeIcon(theme)}</span>
          </label>
        </div>
      )}
    </ThemeToggler>
  )
}
