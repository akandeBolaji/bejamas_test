import React from "react";
import PropTypes from "prop-types";

import { IndexPageTemplate } from "../../templates/index-page";

const HomePagePreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return <IndexPageTemplate data={home} />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HomePagePreview;
 