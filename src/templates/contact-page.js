import React from 'react'
import { graphql } from "gatsby";

import Layout from '../components/Layout'

export function ContactPageTemplate({}) {
  return (
    <>
    <div style={{minHeight : '600px'}} >
      <h1>Contact Page</h1>
      </div>
    </>
  )
}

ContactPageTemplate.propTypes = {}

function ContactPage(props) {
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Contact">
      <ContactPageTemplate />
    </Layout>
  )
}

ContactPage.propTypes = {}

export default ContactPage

export const pageQuery = graphql`
  query {
    ...LayoutFragment
  }
`;
