import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/Layout'

export function AboutPageTemplate({}) {
  return (
    <>
    <div style={{minHeight : '600px'}} >
      <h1>About Page</h1>
      </div>
    </>
  )
}

AboutPageTemplate.propTypes = {}

function AboutPage(props) {
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Blog">
      <AboutPageTemplate />
    </Layout>
  )
}

AboutPage.propTypes = {}

export default AboutPage

export const pageQuery = graphql`
  query {
    ...LayoutFragment
  }
`;
