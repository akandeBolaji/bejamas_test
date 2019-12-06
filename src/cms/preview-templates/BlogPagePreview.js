import React from "react";
import PropTypes from "prop-types";

import { BlogPostTemplate } from "../../templates/index-page";

const BlogPagePreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return <BlogPostTemplate articleDesktop={home} />;
};

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default  BlogPagePreview;
 