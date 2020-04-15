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
              authorImage
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
        <div className="mini-posts">
        {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
                <article className="mini-post" key={frontmatter.title}>
                    <header>
                        <h3>{frontmatter.title}</h3>
                        <time className="published" datetime={frontmatter.date}> {frontmatter.date}</time>
                        <a href="" className="author"><img src="https://avatars0.githubusercontent.com/u/56479869" alt="" /></a>
                    </header>
                <Img className="image" fluid={frontmatter.featuredImage.childImageSharp.fluid}/>
              </article>
          )
        })}
      
        </div>
    </section>
  )
}
