import React from 'react'
import PropTypes from "prop-types";

import Layout from '../components/Layout'

export function IndexPageTemplate({}) {
  return (
    <>
      <h1>Index Page</h1>
    </>
  )
}

IndexPageTemplate.propTypes = {}

function IndexPage(props) {
  console.log(props);
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Home">
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

