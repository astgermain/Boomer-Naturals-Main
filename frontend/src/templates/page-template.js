import React from "react"
import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data, pageContext, location }) => {
    // const post = data.markdownRemark
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    // const { previous, next } = pageContext
    const { handle, title, bodySummary, body } = pageContext.node
    console.log("handle:",pageContext.node)
    return (
        <div>
        {/* <Layout location={location} title={siteTitle}> */}
            <Header />
            {/* <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            /> */}
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    {/* <h1 itemProp="headline">{post.frontmatter.title}</h1> */}
                    {/* <p>{post.frontmatter.date}</p> */}
                </header>
                <section
                    dangerouslySetInnerHTML={{ __html: body }}
                    itemProp="articleBody"
                />
                <hr />
                <Footer />

            </article>
            {/*
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      */}
        </div>
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
