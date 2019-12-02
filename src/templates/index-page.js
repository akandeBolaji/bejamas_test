import React from 'react'

import Layout from '../components/Layout'

export function IndexPageTemplate({}) {
  return (
    <>
      <h1>Index Page</h1>
    </>
  )
}

IndexPageTemplate.propTypes = {}

function IndexPage() {
  return (
    <Layout navbarData={navbarData}>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageData { 
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "index-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            hero {
              image {
                childImageSharp {
                  fluid(maxWidth: 384, maxHeight: 371) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              heading
              subheading
            }
            logos {
              image
              link
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`;

