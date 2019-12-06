import React from "react";
import PropTypes from "prop-types";

import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry }) => {
  return <AboutPageTemplate />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
 