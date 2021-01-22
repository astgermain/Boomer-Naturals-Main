import React from "react"
import Layout from "../components/layout"

const PageTemplate = ({ data, pageContext, location }) => {
    // const post = data.markdownRemark
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    // const { previous, next } = pageContext
    const { body } = pageContext.node
    return (
      <Layout location={location}>
            {/* <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            /> */}
                    {/* <h1 itemProp="headline">{post.frontmatter.title}</h1> */}
                    {/* <p>{post.frontmatter.date}</p> */}

              <div className="page-content-container">
                <section
                    dangerouslySetInnerHTML={{ __html: body }}
                    itemProp="articleBody"
                />
              </div>



                
                <hr />
               
        </Layout>
    )
}

export default PageTemplate

// export const pageQuery = graphql`
//   query PageBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     shopifyPage(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `