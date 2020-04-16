import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            timeToRead
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark
  return (
    <section>
      <ul className="posts">
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <li key={frontmatter.title}>
              <article>
                <header>
                  <h3>
                    <Link to={edge.node.fields.slug}>{frontmatter.title}</Link>
                  </h3>
                  <time className="published" dateTime={frontmatter.date}>
                    {frontmatter.date} &#8226; &nbsp;
                  <span className="readtime">{edge.node.timeToRead} min read </span> 
                  </time>
                  
                </header>
                <Link to={edge.node.fields.slug} className="image">
                  <Img
                    className="image"
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
