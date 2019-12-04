import React from 'react'
import "../styles/blog.scss";
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import { Link } from "gatsby";

import Layout from '../components/Layout'

export function BlogPostTemplate({articleDesktop, articleMobile}) {
  return (
    <>
      <div>
      {articleDesktop && (
        <div className="fordesktop container columns">
        {articleDesktop.map(blog => (
           <div className="myblog column" key={blog.node.frontmatter.title}>
            <div>
              <div>
                <div className="myblog-image">
                <Img
                fluid={blog.node.frontmatter.featuredimage.childImageSharp.fluid}
                alt="hero"
              />
                </div>
              </div>
              <div>
                <div className="content">
                <h1 className="blog-title">{blog.node.frontmatter.title}</h1>
                <div className="blog-excerpt">{blog.node.frontmatter.excerpt}</div>
                </div>
              </div>
            </div>
           </div>
        ))}
        </div>
      )}
      {articleMobile && (
        <div className="formobile container">
          {articleMobile.map(blog => (
           <div className="myblog" key={blog.node.frontmatter.title}>
               <div className="myblog-image">
               <Img
               fluid={blog.node.frontmatter.featuredimage.childImageSharp.fluid}
               alt="hero"
             />
               </div>
               <h1 className="blog-title">{blog.node.frontmatter.title}</h1>
               <div className="blog-excerpt">{blog.node.frontmatter.excerpt}</div>
             </div>
          ))}
        </div>
      )}
      </div>
    </>
  )
}

BlogPostTemplate.propTypes = {}

function BlogPost() {
  return (
    <Layout>
      <BlogPostTemplate />
    </Layout>
  )
}

BlogPost.propTypes = {} 

export default BlogPost
