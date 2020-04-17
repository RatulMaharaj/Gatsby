import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <section id="footer">
        <ul className="icons">
            <li><a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/ratulmaharaj"
                    className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ratulmaharaj/"
                    className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/RatulMaharaj/" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:blog@ratulmaharaj.com" className="icon solid fa-envelope"><span
                    className="label">Email</span></a></li>
            <li><Link target="_blank" rel="noopener noreferrer" to="/rss-feed.xml" className="icon solid fa-rss"><span
                    className="label">RSS</span></Link></li>
        </ul>
        <p className="copyright">Ratul Maharaj</p>
    </section>
)