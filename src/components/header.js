import React from 'react'
import {useState} from 'React' 
import { Link } from "gatsby"

export default () => (
    <header id="header">
        <h1><Link to="/">Ratul Maharaj</Link></h1>
        {/* <nav className="links">
            <ul>
                <li><Link to="/tech">Tech</Link></li>
                <li><Link to="/productivity">Productivity</Link></li>
                <li><Link to="/actuarial">Actuarial</Link></li>
            </ul>
        </nav> */}
        <nav className="main">
            <ul>
                <li className="menu">
                    <a className="fa-bars" href="#menu">Menu</a>
                </li>
            </ul>
        </nav>
    </header>
)

// const rootEl = document.getElementById('menu')

// rootEl.innerHTML = 'js works'

// ReactDOM.render(<Toggler />,rootEl)

// function Toggler() {
//   const [visible, setVisible] = useState(false)
  
//   const toggleVisible = () => setVisible(!visible)
//   const className = "heading "+ (visible ? 'visible' : 'hidden')
//   return(<div>
//            <h1 className={className}>Hello</h1> 
//            <p>My visibility is set to {visible ? 'visible' : 'hidden'}.</p>
//            <button onClick={toggleVisible}>Toggle</button>
//          </div>
//            )
// }