import React from 'react'
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import "../styles/home.scss";
import { Remarkable } from 'remarkable';
import { BlogPostTemplate } from './blog-post'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Layout from '../components/Layout'

export function IndexPageTemplate({data, articleDesktop, articleMobile}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };
  const md =  new Remarkable();
  const markdown = md.render(data.intro.description);
  return (
    <>
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container columns">
           <div className="myhero-heading column">
            <h1 className="title">
              {data.hero.heading}
            </h1>
            <h2 className="subtitle">
              {data.hero.subheading}
            </h2>
            </div>
            <div className="myhero-image column">
            <Img
              fluid={data.hero.image.childImageSharp.fluid}
              alt="hero"
            />
            </div>
          </div>
        </div>
      </section>

      <section className="myintro">
        <div className="myintro-title">
          {data.intro.heading}
        </div>
        <div className="columns">
        <div className="myintro-image column">
            <Img
                fluid={data.intro.image.childImageSharp.fluid}
                alt="hero"
              />
          </div>
          <div dangerouslySetInnerHTML={{__html:markdown}} className="column myintro-description"></div>
        </div>

      </section>
      {data.logos && (
      <div>
      <div className="level">
      {data.logos.map(logo => (
        <p className="level-item has-text-centered" key={logo.link}>
          <a href={logo.link} className="link" ><img className="level-image" src={logo.image} alt="logo" /></a>
        </p>
       ))}
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        transitionDuration={500}
        containerClass="scrolling-wrapper"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="mycard"
      >
        {data.logos.map(logo => (
          <p key={logo.link}>
            <a href={logo.link} className="link" ><img className="level-image" src={logo.image} alt="logo" /></a>
          </p>
        ))}
      </Carousel>
      </div>
      )}
        <BlogPostTemplate articleDesktop={articleDesktop} articleMobile={articleMobile}/> 
        <div className="mybutton"> 
          <button className="button is-rounded"><span className="mybutton-text">{data.button}</span></button>
        </div>
      </div>
    </>
  ) 
}

IndexPageTemplate.propTypes = {}

function IndexPage(props) {
  const { frontmatter: home } = props.data.allMarkdownRemark.edges[0].node;
  const  articleDesktop  = props.data.articleDesktop.edges;
  const  articleMobile  = props.data.articleMobile.edges;
  return (
    <Layout navbarData={props.data.navbarData} footerData={props.data.footerData} presentRoute="Home">
      <IndexPageTemplate data={home} articleDesktop={articleDesktop} articleMobile={articleMobile}/> 
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
            button
            hero {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              heading
              subheading
            }
            intro {
              description
              heading
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
    articleDesktop: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, sort: {order: DESC, fields: frontmatter___date} , limit: 4) {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            featuredimage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    articleMobile: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, sort: {order: DESC, fields: frontmatter___date} , limit: 2) {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            featuredimage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

