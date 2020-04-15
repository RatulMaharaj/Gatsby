import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    markdownRemark {
      frontmatter {
        title
        description
        author
        date
        path
      }
      timeToRead
      wordCount {
        words
      }
      excerpt
      html
    }
  }
`
