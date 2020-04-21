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
            fields{
              slug
            }
            timeToRead
            frontmatter {
              authorImage
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp{
                  fluid(quality:60){
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
                        <h3>
                        <Link to={edge.node.fields.slug}>
                          {frontmatter.title}
                        </Link>
                        </h3>
                        <time className="published" dateTime={frontmatter.date}> {frontmatter.date}
                        &nbsp; &#8226; &nbsp;
                        <span className="readtime">{edge.node.timeToRead} min read </span> 
                        </time>
                        <a href="/" className="author"><img src="https://avatars0.githubusercontent.com/u/56479869" alt="" /></a>
                    </header>
                    <Link to={edge.node.fields.slug} className="image">
                    <Img className="image" fluid={frontmatter.featuredImage.childImageSharp.fluid}/>
                    </Link>
              </article>
          )
        })}
      
        </div>
    </section>
  )
}
