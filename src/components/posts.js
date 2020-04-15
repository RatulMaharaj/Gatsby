import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
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
      <div className="main">
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <article className="post" key={frontmatter.title}>
              <header>
                <div className="title">
                  <h2>
                    <Link to={edge.node.fields.slug}>
                      {frontmatter.title}
                    </Link>
                  </h2>
                  <p>{frontmatter.description}</p>
                </div>
                <div className="meta">
                  <time className="published" dateTime={frontmatter.date}>
                    {frontmatter.date}
                  </time>
                  <Link to="/" className="author">
                    <span className="name">{frontmatter.author}</span>
                    <img
                      src="https://avatars0.githubusercontent.com/u/56479869"
                      alt=""
                    />
                  </Link>
                </div>
              </header>
              <Link to={edge.node.fields.slug} className="image featured">
                <Img
                  fluid={frontmatter.featuredImage.childImageSharp.fluid}
                />
              </Link>

              <p>{edge.node.excerpt}</p>

              <footer>
                <ul className="actions">
                  <li>
                    <Link to={edge.node.fields.slug} className="button large">
                      Continue Reading
                    </Link>
                  </li>
                </ul>
                <ul class="stats">
                  {frontmatter.tags.map(tag => {
                    return <li>{tag}</li>
                  })}
                </ul>
              </footer>
            </article>
          )
        })}
      </div>
    </section>
  )
}
