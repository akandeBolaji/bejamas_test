import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/Layout'

export function BlogPageTemplate({}) {
  return (
    <>
    <div style={{minHeight : '600px'}} >
      <h1>Blog Page</h1>
      </div>
    </>
  )
}

BlogPageTemplate.propTypes = {}

function BlogPage(props) {
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Blog">
      <BlogPageTemplate />
    </Layout>
  )
}

BlogPage.propTypes = {}

export default BlogPage

export const pageQuery = graphql`
  query {
    ...LayoutFragment
  }
`;
