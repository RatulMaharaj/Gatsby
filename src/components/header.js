import React from "react" 
import { Link } from "gatsby"

export default () => {
    return(    
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
}

