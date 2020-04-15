import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div id="main">
        <article className="post full">
          <header>
            <div className="title">
              <h2><a>{post.frontmatter.title}</a></h2>
              <p>{post.frontmatter.description}<br/><br/><p>{post.timeToRead} min read</p></p>
            </div>
            <div className="meta">
              <time className="published" dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>        
              <a href="/" className="author"><span className="name">Ratul Maharaj</span><img src="https://avatars0.githubusercontent.com/u/56479869" alt="" /></a>
            </div>
          </header>
          
          <span className="image featured"><Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/></span>
								
            <h1></h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <center>
          <Footer/>
        </center>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`