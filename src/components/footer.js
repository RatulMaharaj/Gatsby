import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaRss } from "react-icons/fa"
import "./footer.css"

export default () => (
  <section id="footer">
    <ul className="icons">
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://in.linkedin.com/in/ratulmaharaj"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ratulmaharaj/"
        >
          <FaInstagram/>

        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RatulMaharaj/"
        >
          <FaGithub/>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:blog@ratulmaharaj.com"
        >
        <FaEnvelope/>
        </a>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="/rss-feed.xml"
        >
          <FaRss/>
        </Link>
      </li>
    </ul>
    <p className="copyright">Ratul Maharaj</p>
  </section>
)
