import React from 'react'

import Layout from '../components/Layout'

export function BlogPageTemplate({}) {
  return (
    <>
      <h1>Blog Page</h1>
    </>
  )
}

BlogPostTemplate.propTypes = {}

function BlogPage() {
  return (
    <Layout>
      <BlogPostTemplate />
    </Layout>
  )
}

BlogPage.propTypes = {}

export default BlogPage
