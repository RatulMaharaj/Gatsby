import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp{
                  fluid{
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
                    <a>{frontmatter.title}</a>
                  </h3>
                  <time className="published" datetime={frontmatter.date}>
                    {frontmatter.date}
                  </time>
                </header>
                <Img className="image" fluid={frontmatter.featuredImage.childImageSharp.fluid}/>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
