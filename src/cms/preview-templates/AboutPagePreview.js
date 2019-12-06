import React from "react";
import PropTypes from "prop-types";

import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = () => {
  return <AboutPageTemplate />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
 