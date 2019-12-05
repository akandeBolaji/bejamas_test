import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/Layout'

export function ProductsPageTemplate({}) {
  return (
    <>
      <div style={{minHeight : '600px'}} >
      <h1>Products Page</h1>
      </div>
    </>
  )
}

ProductsPageTemplate.propTypes = {}

function ProductsPage(props) {
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Products">
      <ProductsPageTemplate />
    </Layout>
  )
}

ProductsPage.propTypes = {}

export default ProductsPage

export const pageQuery = graphql`
  query {
    ...LayoutFragment
  }
`;


