import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";

import { useSiteMetadata } from '../lib/hooks'

function Layout(props) {
  console.log(props)
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar data={props.navbarData} />
      <main>{props.children}</main>
    </div>
  )
}

export const query = graphql`
  fragment LayoutFragment on Query {
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default Layout
 