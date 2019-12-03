import React from 'react'

import Layout from '../components/Layout'

export function BlogPageTemplate({}) {
  return (
    <>
      <h1>Blog Page</h1>
    </>
  )
}

BlogPageTemplate.propTypes = {}

function BlogPage() {
  return (
    <Layout>
      <BlogPageTemplate />
    </Layout>
  )
}

BlogPage.propTypes = {}

export default BlogPage
