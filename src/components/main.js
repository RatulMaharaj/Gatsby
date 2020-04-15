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
            excerpt
            timeToRead  
            frontmatter {
              author
              description
              authorImage
              tags
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
        <div className="main">
        {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
                <article className="post" key={frontmatter.title}>
                    
                    <header>
                        <div className="title">
                            <h2>{frontmatter.title}</h2>
                            <p>{frontmatter.description}</p>
                        </div>
                        <div className="meta">
                            <time className="published" dateTime={frontmatter.date}> {frontmatter.date}</time>
                            <a href="" className="author"><span className="name">{frontmatter.author}</span>
                            <img src="https://avatars0.githubusercontent.com/u/56479869" alt="" /></a>
                        </div>
                    </header>
                    
                    <Img className="image featured" fluid={frontmatter.featuredImage.childImageSharp.fluid}/>
                    
                    <p>{edge.node.excerpt}</p>

                    <footer>
                        <ul className="actions">
                            <li><a className="button large">Continue Reading</a></li>
                        </ul>
                        <ul class="stats">	
                            {frontmatter.tags.map(tag=>{
                                return(<li>{tag}</li>)
                                })
                            }
                        </ul>

				    </footer>

              </article>
          )
        })}
      
        </div>
    </section>
  )
}
