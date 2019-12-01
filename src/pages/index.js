import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { IndexPageTemplate } from "../../templates/index-page";


class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    return (
      <Layout navbarData={navbarData}>
        <IndexPageTemplate home={home}></IndexPageTemplate>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

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
  }
`;
