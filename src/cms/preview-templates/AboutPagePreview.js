import React from "react";
import PropTypes from "prop-types";

import { AboutPageTemplate } from "../../templates/about-page";

const HomePagePreview = ({ entry }) => {
  return <AboutPageTemplate />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
 