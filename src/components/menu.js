import React from 'react'
import { Link } from "gatsby"

export default () => (
    <section id="menu">
        <section>
            <form className="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search" />
            </form>
        </section>

        <section>
            <ul className="links">
                <li>
                    <Link to="/tech">
                        <h3>Tech</h3>
                        <p>All things Tech</p>
                    </Link>
                </li>
                <li>
                    <Link to="/productivity">
                        <h3>Productivity</h3>
                        <p>Living a more productive life</p>
                    </Link>
                </li>
                <li>
                    <Link to="/actuarial">
                        <h3>Actuarial</h3>
                        <p>Useful links and information</p>
                    </Link>
                </li>
            </ul>
        </section>

        <section>
            <ul className="actions stacked">
                <li><a href="mailto:?Subject=You have got to check this out!&amp;Body=https://ratulmaharaj.com"
                        className="button large fit">Share</a></li>
            </ul>
        </section>

    </section>
)