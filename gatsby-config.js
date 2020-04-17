/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ratul Maharaj`,
    siteUrl: `https://ratulmaharaj.com`,
    description: `The personal blog and website of Ratul Maharaj.`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160728827-1",
      },
    },
    {
      resolve:`gatsby-plugin-feed`,
      options:{
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds:[
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                language: 'en',
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                enclosure: edge.node.frontmatter.featuredImage && {
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.featuredImage.childImageSharp.fluid.originalImg,
              },
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      description
                      date
                      featuredImage {
                        childImageSharp {
                          fluid {
                            originalImg
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          output: "/rss-feed.xml",
          title: "The Ratul Maharaj Blog",
        }
      ]

      },

    }
  ],
}